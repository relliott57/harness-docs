"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function er has executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
