/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { TranslatorTextClientContext } from "./translatorTextClientContext";

class TranslatorTextClient extends TranslatorTextClientContext {
  // Operation groups
  translator: operations.Translator;

  /**
   * Initializes a new instance of the TranslatorTextClient class.
   * @param endpoint Supported Cognitive Services endpoints
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: Models.TranslatorTextClientOptions) {
    super(credentials, endpoint, options);
    this.translator = new operations.Translator(this);
  }
}

// Operation Specifications

export {
  TranslatorTextClient,
  TranslatorTextClientContext,
  Models as TranslatorTextModels,
  Mappers as TranslatorTextMappers
};
export * from "./operations";