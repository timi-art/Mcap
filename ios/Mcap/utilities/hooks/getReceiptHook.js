import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Modal,
  ImageBackground,
  Pressable,
  PixelRatio,
  TouchableOpacity,
  Platform
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { COLORS, FONTS, GLOBAL_STYLE, images, SIZES, isAndroid } from "../../constants";
import {
  ReceiptKeyStoneLogo,
  PdfIcon,
  ReceiptImageIcon,
} from "../../constants/icons";

import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { manipulateAsync } from "expo-image-manipulator";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { captureRef } from "react-native-view-shot";
import { formattedAmount } from "../../utilities/helperFunctions/formatAmount";
import moment from "moment";
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';

const CreateReceipt = (item) => {
  const viewRef = useRef();
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [success, setSuccess] = useState(false)

  const generateHtml = async () => {
    const asset = Asset.fromModule(require("../../assets/images/pdfLogo.png"));
    const asset2 = Asset.fromModule(require("../../assets/images/logo.png"));
    let image = await manipulateAsync(asset.localUri ?? asset.uri, [], {
      base64: true,
    });
    let image2 = await manipulateAsync(asset2.localUri ?? asset2.uri, [], {
      base64: true,
    });
    return `
    <html >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style>
        @page {
          margin: 0;
        }
      </style>
        </head>
      <body style="text-align:center; margin: 0;padding: 0; box-sizing: border-box;">
      <div>
        <div style="background-color: #0D205E; padding: 5rem 1rem">
          <div style="display: flex; justify-content: space-between;align-items:center">
            <div style="display: flex; align-items: center;">
              <img src="data:image/jpeg;base64,${
                image.base64
              }" style="width: 5rem;" />
              <div style="margin-left:1rem; font-family: poppins; color: white; font-size: 2rem; text-align: start;">    
              <p style="margin: 0"> Keystone</p> 
              <p style="margin: 0"> Bank</p> 
                      
                      </div>
  
            </div>
            <div style="color:white;font-size: 2rem; text-align: end">
              <p style="color: white;margin: 0">Transaction Receipt</p>
              <p style="color: #C4C4C4; margin: 0">Send Money</p>
            </div>
          </div>
    
        </div>
        <div style="margin-top:5rem; background: rgba(255, 255, 255, 0.5) url('data:image/jpeg;base64,${
          image2.base64
        }') no-repeat cover">
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Date:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${moment().format(
              "DD /MM /YYYY"
            )} </p>
          </div>
    
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Sender:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.sendername
            }</p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Sender Account:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.draccountno || "Not sent"
            }</p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Amount:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${formattedAmount(
              item?.amount
            )}</p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Beneficiary:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.benename
            }</p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Beneficary Bank:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.nemebank
            } </p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Narration:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.narration
            }</p>
          </div>
          <div style="color:white; display: flex; align-items: flex-end; margin: 0 10rem; border-bottom: 2px solid  #C4C4C4; border-padding: 0 10rem;">
            <p style="color: #0D205E; font-size: 1rem">Status:</p>
            <p style="color: #C4C4C4; font-size: 1rem; margin-left: 1rem">${
              item?.statusmessage
            }</p>
          </div>
          <div style="padding:5rem 7rem 1rem 7rem; font-size: 10px; text-align: center">
            <p>Disclaimer</p>
            <p style="text-align: start">Your transfer has been successful and the beneficiary's account will be credited. However, this does not serve as
              confrmation of credit into the beneficiary's account. Due to the nature of the Internet, transactions may be subject to
              interruption, transmission blackout, delayed transmission and incorrect data transmission.The Bank is not liable for
              malfunctions in communications facilities not within its control that may affect the accuracy or timeliness of
              messages and transactions you send.All transactions are subject to verifcation and our normal fraud checks</p>
    
            <p style="margin-top: 2rem"><strong>Generated from Beyond </b></strong>
          </div>
        </div>
    
      </div>
    
    </body>
    </html>
    `;
  };
  

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = await generateHtml();
    const { uri } = await printToFileAsync({
      html,
    });

    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const imageToFile = async () => {
    const targetPixelCount = 720;
    const pixelRatio = PixelRatio.get();
    const pixels = targetPixelCount / pixelRatio;
    const result = await captureRef(viewRef, {
      result: "base64",
      height: pixels,
      width: pixels,
      quality: 0.7,
      format: "png",
    });

    try {
      let filename = "keystone_receipt.png"; // or some other way to generate filename
      let filepath = `${FileSystem.documentDirectory}/${filename}`;
      await FileSystem.writeAsStringAsync(filepath, result, {
        encoding: FileSystem.EncodingType.Base64,
      });
      await shareAsync(filepath, { mimeType: "image/png" });
     
    } catch (e) {
      alert(e.message);
    }
  };

  const savePdf  = async() => {
    const html = await generateHtml();
    const uri  = await printToFileAsync({
      html,
      base64: true
      
    });

    const pdfFile64 = uri.base64
  
   if(isAndroid) {
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync("Documents");
    if (!permissions.granted) {
        return;
    }

    let fileName = "keystone_receipt.pdf"
    
    try {
      
      await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
      .then(async (uri) => {
        await FileSystem.writeAsStringAsync(uri, pdfFile64, {
          encoding: FileSystem.EncodingType.Base64,
        })
      setSuccess("pdf saved successfully")
       
      })
    .catch((e) => {
        console.log(e);
    });
        
  } catch (e) {
      throw new Error(e);
  }
   }else {
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
   }
  
  }

  const saveImage  = async() => {
   
    const targetPixelCount = 720;
    const pixelRatio = PixelRatio.get();
    const pixels = targetPixelCount / pixelRatio;
    const result = await captureRef(viewRef, {
      result: "base64",
      height: pixels,
      width: pixels,
      quality: 0.7,
      format: "png",
    });

    try {
      let filename = "keystone_receipt.png"; // or some other way to generate filename
      let filepath = `${FileSystem.documentDirectory}${filename}`;
      await FileSystem.writeAsStringAsync(filepath, result, {
        encoding: FileSystem.EncodingType.Base64,
      });
     
     if(isAndroid){
      MediaLibrary.saveToLibraryAsync(filepath)
     }else{
      await shareAsync(filepath, { mimeType: "image/png" });
     }
    
      setSuccess("image saved successfully")
    } catch (e) {
      alert(e.message);
    }
  }


  const TextComponent = ({ label, resp }) => (
    <View
      style={{
        ...GLOBAL_STYLE.rowBetween,
        ...{
          width: "100%",
          marginBottom: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.grey,
          borderStyle: "dashed",
        },
      }}
    >
      <Text style={GLOBAL_STYLE.h3}>{label}</Text>
      <Text style={[GLOBAL_STYLE.h3, { color: COLORS.grey }]}>{resp}</Text>
    </View>
  );

  const ReceiptImage = () => (
    <View style={styles.container}>
      <View style={styles.bottomContainer} ref={viewRef}>
        <View
          style={{
            width: "100%",
            paddingTop: 20,
            paddingBottom: 10,
            backgroundColor: COLORS.primaryBlue,
          }}
        >
          <View
            style={{
              ...GLOBAL_STYLE.rowBetween,
              ...{
                backgroundColor: COLORS.primaryBlue,
                marginHorizontal: "5%",
              },
            }}
          >
            <ReceiptKeyStoneLogo />
            <View>
              <Text style={[GLOBAL_STYLE.h3, { color: "white" }]}>
                Transaction Receipt
              </Text>
              <Text
                style={[
                  GLOBAL_STYLE.h4,
                  { color: COLORS.grey, textAlign: "right" },
                ]}
              >
                Send Money
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={images.receiptBg}
          style={{ width: "100%" }}
          imageStyle={{ backgroundColor: COLORS.white }}
        >
          <View style={{ marginHorizontal: "5%", marginTop: 30 }}>
            <TextComponent
              label="Date"
              resp={moment().format("DD /MM /YYYY")}
            />
            <TextComponent label="Sender" resp={item?.draccountname} />
            <TextComponent label="Sender Account" resp={item?.draccountno} />
            <TextComponent
              label="Amount"
              resp={formattedAmount(item?.amount)}
            />
            <TextComponent label="Beneficiary" resp={item?.craccountname} />
            <TextComponent label="Beneficiary Bank" resp={item?.bankname} />
            <TextComponent label="Narration" resp={item?.narration} />
            <TextComponent label="Status" resp={item?.statusmessage} />
          </View>
        </ImageBackground>
      </View>
     
    </View>
  );

  useEffect(() => {
    (async () => {
      requestPermission();

    })();
  }, []);

  return [printToFile, ReceiptImage, imageToFile, savePdf, saveImage, success];
};

export default CreateReceipt;
const styles = StyleSheet.create({

  container: {
   backgroundColor: "red"

  },
  bottomContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.primaryBlue,
  },
  infoText: {
    color: "#979797",
    fontFamily: FONTS.normal,
    fontSize: 16,
    textAlign: "center",
  },
  buttonText: {
    // color: COLORS.primaryBlue,
    fontFamily: FONTS.normal,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
});
