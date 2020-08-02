import {createStore, combineReducers} from "redux";
import {persistStore, persistReducer, createTransform} from "redux-persist";
import storage from "redux-persist/lib/storage";
import CryptoJS from "crypto-js";

import {storeEncryptionKey} from "./encryptionKeyConfig";

import CommonHelper from "../libs/CommonHelper";

import appReducer from "../store/reducers/appReducer";

const encryptor = createTransform(
  (inboundState, key) =>
  {
    if (!CommonHelper.isExist(inboundState))
    {
      return inboundState;
    }

    let encryptedInboundState = CryptoJS.AES.encrypt(JSON.stringify(inboundState), storeEncryptionKey);
    encryptedInboundState = encryptedInboundState.toString();

    return encryptedInboundState;
  },
  (outboundState, key) =>
  {
    if (!CommonHelper.isExist(outboundState))
    {
      return outboundState;
    }

    let decryptedOutboundState = CryptoJS.AES.decrypt(outboundState, storeEncryptionKey);
    decryptedOutboundState = decryptedOutboundState.toString(CryptoJS.enc.Utf8);
    decryptedOutboundState = JSON.parse(decryptedOutboundState);

    return decryptedOutboundState;
  }
);

const reducer = combineReducers({
                                  appReducer: persistReducer(
                                    {
                                      key: "appReducer",
                                      whitelist: ["user", "language"],
                                      storage: storage,
                                      transforms: [encryptor]
                                    },
                                    appReducer)
                                });

const persistedReducer = persistReducer(
  {
    key: "root",
    blacklist: ["appReducer"],
    storage: storage
  },
  reducer
);

const configStore = () =>
{
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configStore;
