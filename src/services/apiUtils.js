import React, { Component } from "react";

// ApiUtils.js
const ApiUtils = {
  checkStatus: response => {
    return response.json().then(responseData => {
      if (response.status >= 200 && response.status < 300) {
        return response.clone();
      } else {
        const error = new Error(responseData.errors[0].message);
        error.response = response;
        throw error;
      }
    });
  }
};
export default ApiUtils;
