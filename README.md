# fabricai-api-client

**FabricAiApiClient** is a third party [FabricAI API](https://ai.dev.fabricai.io/docs/api/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://ai.fabricai.io/swagger/doc.json) provided by FabricAI.

## Installation

Add to project's package.json:

```
npm install @rantalainen/fabricai-api-client
```

### Import to NodeJS project

```javascript
const { FabricAiApiClient } = require('@rantalainen/fabricai-api-client');
```

### Import to TypeScript project

```javascript
import { FabricAiApiClient } from '@rantalainen/fabricai-api-client';
```

## Setup client with options

In order to obtain an API key, please contact FabricAI Support. An API key is needed to access all API functions.

```javascript
const fai = new FabricAiApiClient(
  {
    apiKey: 'api_key'
  },
  {
    baseURL: 'https://ai.dev.fabricai.io'
  }
);
```

Available methods can be found in the [Technical API documentation](https://ai.dev.fabricai.io/docs/api/).

## Resources

- FabricAI: https://fabricai.fi/
- FabricAI AI Inside Developer Guide: https://ai.dev.fabricai.io/docs/
- FabricAI Technical API documentation: https://ai.dev.fabricai.io/docs/api/

## Changelog

- 1.0.0 First release
