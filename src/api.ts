/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface InvoiceAttachment {
  /**
   * Attachment's data as Base64 encoded
   * @example "V2UgPDMgVSE="
   */
  base64: string;
  /**
   * Unique identification of the id (does not have to be globally unique)
   * @example "12412"
   */
  id: string;
  /**
   * Expected mimeType of the attachment. Note, this must match whatever is extracted from base64 encoded file's Magic Number
   * @example "application/xml"
   */
  mimeType: string;
}

export interface InvoiceBankAccount {
  /**
   * Official BIC of the bank
   * @example "DEUTDEFFXXX"
   */
  bic?: string;
  /**
   * Bank account (IBAN) that the invoice should be paid to
   * @example "DE43500105175846214835"
   */
  iban?: string;
}

export interface InvoiceDimensionItemValue {
  /**
   * Dimension's "group" name
   * @example "department"
   */
  dimensionId: string;
  /**
   * Specific item in the dimension "group"
   * @example "marketing"
   */
  itemId: string;
  /**
   * Value to the dimension. Invoice row's dimension values will be normalized to 1 if there are multiple items
   * @example 10
   */
  value: number;
}

export interface InvoiceDiscussion {
  /**
   * User who created the entry
   * @example "John Doe"
   */
  name: string;
  /**
   * Text content of the entry
   * @example "Please, send the invoice to my email"
   */
  text: string;
  /**
   * Timestamp of the discussion entry
   * @example "2021-09-16T09:33:15.212Z"
   */
  timestamp: string;
}

export interface InvoiceInvoice {
  /** Possible attachments. If the invoice has been created from Finvoice, please, include the original invoice as an attachment, too. */
  attachments?: InvoiceAttachment[];
  /** Official address (and info) about the billed party */
  billingAddress?: TypesAddress;
  /**
   * This is a timestamp of when the invoice was created (or received) by your system. If this is not same as Version, the Invoice has been edited by someone.
   * @example "2021-09-16T09:33:15.212Z"
   */
  createdAt: string;
  /**
   * Invoice's creation date in the seller's system
   * @example "2021-09-14"
   */
  date: string;
  /** Official address (and info) about the delivery */
  deliveryAddress?: TypesAddress;
  /** Possible discussions associated with the invoice */
  discussions?: InvoiceDiscussion[];
  /**
   * Invoice's due date
   * @example "2021-09-28"
   */
  dueDate: string;
  /**
   * Free text style notes from the invoice
   * @example "Service period 1.2.2021 - 28.2.2021"
   */
  notes?: string;
  /**
   * This is usually the invoice's identification that accountants use.
   * @example "INV-9241"
   */
  number?: string;
  /**
   * Seller's reference from the invoice
   * @example "FAI-1"
   */
  ourReference?: string;
  /** Information about the payment of invoice */
  paymentInfo: InvoicePaymentInfo;
  /**
   * Invoice rows
   * @minItems 1
   */
  rows?: InvoiceInvoiceRow[];
  /** Official address (and info) about the seller */
  sellerAddress: TypesAddress;
  /**
   * Total in the client's currency, should equal the sum of all invoice rows
   * @example 12.4
   */
  total: number;
  /**
   * Total in the invoice's currency
   * @example 12.4
   */
  totalInOriginalCurrency?: number;
  /**
   * This is timestamp of the invoice's last edit. If the invoice has NOT been edited, this should equal CreatedAt
   * @example "2021-09-16T09:33:15.212Z"
   */
  version: string;
  /**
   * Buyer's reference from the invoice
   * @example "KP12"
   */
  yourReference?: string;
}

export interface InvoiceInvoiceRow {
  /**
   * Possible account (suggestion)
   * @example "6780"
   */
  account?: string;
  /**
   * Possible extra info about the product
   * @example "Large"
   */
  comment?: string;
  /** Dimensions that have been applied to the row */
  dimensionItemValues?: InvoiceDimensionItemValue[];
  /**
   * Invoice row's id in YOUR system or templated as row_{index} if we have generated this row from Finvoice
   * @example "23414"
   */
  id: string;
  /**
   * Name of the product
   * @example "Cardboard boxes"
   */
  product?: string;
  /**
   * Possible product code from the seller
   * @example "BX-L"
   */
  productCode?: string;
  /**
   * Amount delivered
   * @example 100
   */
  quantity?: number;
  /**
   * Unit of the product
   * @example "PCS"
   */
  unit?: string;
  /**
   * Unit price in the original currency
   * @example 0.1
   */
  unitPriceInOriginalCurrency?: number;
  /**
   * Total value of the row in client's currency (inc. VAT)
   * @example 12.4
   */
  value: number;
  /**
   * Total value of the row in invoice's currency (inc. VAT)
   * @example 12.4
   */
  valueInOriginalCurrency?: number;
  /**
   * Vat percentage that is applicable to this row
   * @example 24
   */
  vatPercent: number;
  /**
   * Vat status of the row (if now known, specify vat_1)
   * @example "vat_1"
   */
  vatStatus?: string;
}

export interface InvoicePaymentInfo {
  /** Where the payment should be made (in original currency) */
  bankAccount?: InvoiceBankAccount;
  /**
   * Currency code as per ISO 4217
   * @example "EUR"
   */
  currency: string;
  /**
   * Conversion between your client's currency and invoice's currency
   * @example 1
   */
  currencyRate: number;
}

export type InvoiceSmartScanInvoice = object;

export interface ModelsClientAutomation {
  allowedCounterPartyNames?: string[];
  allowedPredictedLabels?: string[];
  blockedCounterPartyNames?: string[];
  blockedPredictedLabels?: string[];
  createdAt?: string;
  id?: number;
  inactiveEnd?: string;
  inactiveRepeatEveryYear?: boolean;
  inactiveStart?: string;
  maximumAllowedAbsoluteExpectedErrorValueForItem?: number;
  maximumAllowedAbsoluteInvoiceTotal?: number;
  minimumRequiredProbability?: number;
  name?: string;
  patience?: string;
  progressiveAutomationAnalysisStartDate?: string;
  qualityAssuranceRate?: number;
  status?: string;
  updatedAt?: string;
}

export interface ModelsInvoiceAutomation {
  action?: string;
  clientAutomationId?: number;
  createdAt?: string;
  id?: number;
  updatedAt?: string;
}

export interface ModelsInvoiceItem {
  account?: string;
  description?: string;
  dimensionItemValues?: TypesDimensionItemValues;
  id?: number;
  transactionId?: string;
  value?: number;
  valueInOriginalCurrency?: number;
  vatDeductionPercent?: number;
  vatPercent?: number;
  vatStatus?: string;
}

export interface ModelsInvoicePredictionProbability {
  total?: number;
  totalAccount?: number;
  totalDimension?: number;
  totalVatStatus?: number;
}

export interface ModelsInvoiceProcessNote {
  createdAt?: string;
  errorCode?: string;
  message?: string;
  type?: string;
  updatedAt?: string;
}

export interface ModelsItemPrediction {
  dimensionId?: string;
  label?: string;
  modelName?: string;
  predictions?: TypesPrediction[];
  preprocessor?: string;
}

export interface ModelsModelTrainingRequestProcessor {
  deprecationNotice?: string;
  description?: string;
  generator?: string;
  id?: number;
  initialRelease?: string;
  isDeprecated?: boolean;
  plannedEndOfLife?: string;
  previousVersion?: number;
  processor?: string;
  suggestedCountry?: string;
  suggestedForRetraining?: boolean;
  suggestedLabel?: string;
}

export interface ModelsModelTrainingRequestsLog {
  createdAt?: string;
  message?: string;
  requester?: string;
  status?: string;
}

export interface ModelsOrganization {
  billingEmail?: string;
  billingIdentifier?: string;
  billingReference?: string;
  businessId?: string;
  city?: string;
  country?: string;
  createdAt?: string;
  einvoiceAddress?: string;
  einvoiceOperator?: string;
  id?: number;
  name?: string;
  streetAddress?: string;
  tags?: TypesHStore;
  updatedAt?: string;
  zipCode?: string;
}

export interface ModelsOrganizationKey {
  createdAt?: string;
  description?: string;
  prefix?: string;
  scope?: string;
  updatedAt?: string;
}

export interface ModelsProvider {
  createdAt?: string;
  name?: string;
  tags?: TypesHStore;
  updatedAt?: string;
}

export interface ModelsTrainingDataUploadJob {
  completedAt?: string;
  createdAt?: string;
  id?: string;
  messages?: Record<string, any>[];
  status?: string;
}

export interface ModelsUser {
  createdAt?: string;
  email?: string;
  name?: string;
  uid?: string;
  updatedAt?: string;
}

export interface ModelsVatRate {
  endDate?: string;
  /** The id of the new vat rate that replaces this one */
  replacedById?: number;
  startDate?: string;
  value?: number;
}

export interface ModextAuthProviderDetails {
  /** The OAuth provider ID (e.g. "microsoft.com", "google.com", "github.com") */
  providerId?: string;
  /** For Microsoft, this is the ObjectID of the user in Azure Active Directory. */
  uid?: string;
}

export interface ModextClient {
  /** An optional field that you can use if you need a way to map this client back to a specific client in your own accounting software */
  accountingSystemCompanyId?: string;
  /** Automations are automation rules that are applied to the client */
  automations?: ModelsClientAutomation[];
  /** The official business id formatted as VAT Identication number */
  businessId?: string;
  /** Properly formatted country code (alpha 2 of ISO 3166). */
  country: string;
  createdAt?: string;
  /** Properly formatted domain */
  domain?: string;
  /**
   * Client's id in AI Inside
   * @example 4123
   */
  id?: number;
  /** The client's industry in plain text */
  industry?: string;
  /** The NACE / TOL2008 code for the client's industry. If you have the NACE code e.g. A1.4.1, convert this to 0141 as the database expects ^[0-9]+$ */
  industryCode?: string;
  /**
   * When the invoices were last checked and sent from accounting software to ai-inside
   * Can be used to e.g. keep track of when the client was last updated
   */
  invoicesLastFetchedAt?: string;
  /** Official name of the client */
  name: string;
  /**
   * ID of the organization this client belongs to
   * @example 4123
   */
  organizationId?: number;
  /** @default "BACKGROUND_PROCESS" */
  serviceTemplate?:
    | "BACKGROUND_PROCESS"
    | "CUSTOMER_DOES_NOTHING"
    | "BACKGROUND_PROCESS_AND_LAST_CHECK_WITH_CUSTOMER_ACCOUNTS"
    | "BACKGROUND_PROCESS_AND_LAST_CHECK";
  status?: "ACTIVE" | "INACTIVE";
  /**
   * Clients system, normally this is "ai-inside"
   * Note that this cannot be changed once the client is created
   */
  system?: string;
  /** Tags can be used to identify and group different clients. With simple integrations this can also serve as a "database" */
  tags?: Record<string, string>;
  /** The teams' IDs this client belongs to */
  teams?: number[];
  updatedAt?: string;
}

export interface ModextCollectionClient {
  businessId?: string;
  createdAt?: string;
  id?: number;
  invoicesLastFetchedAt?: string;
  name?: string;
  organization?: string;
  organizationId?: number;
  status?: "ACTIVE" | "INACTIVE";
  system?: string;
  tags?: Record<string, string>;
  updatedAt?: string;
}

export interface ModextModelTrainingRequest {
  /** Optional callback URL that will be requested when model training has been completed */
  callbackURL?: string;
  /** Unsupported as of now */
  datasetLabels?: string[];
  /** Required when label is DIMENSION */
  dimensionId?: string;
  label: "ACCOUNT" | "DIMENSION";
  /**
   * The priority of the model training request - should be between -10 and 10. If not provided, the default value is 0.
   * @min -10
   * @max 10
   */
  priority?: number;
  processorId?: number;
}

export interface ModextOrganization {
  apiKey?: TypesAPIKey;
  billingEmail?: string;
  billingIdentifier?: string;
  billingReference?: string;
  businessId?: string;
  city?: string;
  country?: string;
  createdAt?: string;
  einvoiceAddress?: string;
  einvoiceOperator?: string;
  id?: number;
  name?: string;
  streetAddress?: string;
  tags?: TypesHStore;
  updatedAt?: string;
  zipCode?: string;
}

export interface ModextPredictionModel {
  createdAt?: string;
  datasetLabels?: string[];
  dimensionId?: string;
  forcedLowerTreshold?: string;
  forcedUpperTreshold?: string;
  heartbeat?: string;
  id?: number;
  isTest?: boolean;
  label?: string;
  logs?: ModelsModelTrainingRequestsLog[];
  priority?: number;
  processor?: ModelsModelTrainingRequestProcessor;
  serverIdentificationKey?: string;
  status?: "PENDING" | "PRE_PROCESSING" | "RUNNING" | "COMPLETED" | "DEPLOYED" | "FAILED" | "CANCELLED";
  updatedAt?: string;
}

export interface ModextTeam {
  /** List of client IDs */
  clients?: number[];
  createdAt?: string;
  id?: number;
  /** List of member UIDs */
  members?: string[];
  name?: string;
  tags?: TypesHStore;
  updatedAt?: string;
}

export interface ModextUser {
  /**
   * Authentication provider details for user pre-linking. When set, the user will be created with email/password authentication **disabled**.
   * > This field is only supported when creating a new user.
   */
  authProvider?: ModextAuthProviderDetails;
  createdAt?: string;
  email?: string;
  name?: string;
  /** List of teams' IDs the user belongs to */
  teams?: number[];
  uid?: string;
  updatedAt?: string;
}

export interface PredictionDetailedInvoice {
  /** Automations that have been executed for this invoice */
  automations?: ModelsInvoiceAutomation[];
  /** Name of the counter party as extracted from sellerAddress */
  counterPartyName?: string;
  /**
   * This is the time when the invoice was sent to AI Inside
   * @example "2021-09-16T09:33:15.212Z"
   */
  createdAt?: string;
  /**
   * Invoice's creation date in the seller's system
   * @example "2021-09-14"
   */
  date?: string;
  /**
   * Unique identification of this invoice from YOUR system
   * @example "31241231"
   */
  id?: string;
  /**
   * This is usually the invoice's identification that accountants use.
   * @example "101"
   */
  number?: string;
  /** @example "2021-09-14" */
  periodEndDate?: string;
  /** @example "2021-09-14" */
  periodStartDate?: string;
  /**
   * Timestamp for the prediction
   * @example "2021-09-16T10:23:21.351Z"
   */
  predictedAt?: string;
  /** Array of predictions and their probabilities */
  predictionProbabilities?: ModelsInvoicePredictionProbability;
  processNotes?: ModelsInvoiceProcessNote[];
  /** Possible processing errors if the invoice could not be handled properly */
  processingErrors?: string[];
  /** These are only present when the invoice has been predicted */
  rows?: PredictionItem[];
  /**
   * The status of the invoice
   * @example "PROCESSING"
   */
  status?:
    | "PROCESSING"
    | "COMPLETED"
    | "PENDING"
    | "FAILED"
    | "PRE_COMPLETED"
    | "RETURNING_DATA_REQUESTED"
    | "RETURNING_DATA"
    | "SKIPPED"
    | "DELETED";
  /**
   * Total in the client's currency (including VAT)
   * @example 12.4
   */
  total?: number;
  /**
   * This is a timestamp of when the invoice or it's items were last edited in our database.
   * @example "2021-09-16T09:33:15.212Z"
   */
  updatedAt?: string;
  /**
   * This is copy paste from the version timestamp you provided. You can use this to avoid any merge issues when using the predictions.
   * @example "2021-09-16T09:33:15.212Z"
   */
  version?: string;
}

export interface PredictionInvoice {
  /** Automations that have been executed for this invoice */
  automations?: ModelsInvoiceAutomation[];
  /** Name of the counter party as extracted from sellerAddress */
  counterPartyName?: string;
  /**
   * Invoice's creation date in the seller's system
   * @example "2021-09-14"
   */
  date?: string;
  /**
   * Unique identification of this invoice from YOUR system
   * @example "31241231"
   */
  id?: string;
  /**
   * This is usually the invoice's identification that accountants use.
   * @example "101"
   */
  number?: string;
  /** @example "2021-09-14" */
  periodEndDate?: string;
  /** @example "2021-09-14" */
  periodStartDate?: string;
  /**
   * Timestamp for the prediction
   * @example "2021-09-16T10:23:21.351Z"
   */
  predictedAt?: string;
  /** Array of predictions and their probabilities */
  predictionProbabilities?: ModelsInvoicePredictionProbability;
  /**
   * The status of the invoice
   * @example "PROCESSING"
   */
  status?:
    | "PROCESSING"
    | "COMPLETED"
    | "PENDING"
    | "FAILED"
    | "PRE_COMPLETED"
    | "RETURNING_DATA_REQUESTED"
    | "RETURNING_DATA"
    | "SKIPPED"
    | "DELETED";
  /**
   * Total in the client's currency (including VAT)
   * @example 12.4
   */
  total?: number;
  /**
   * This is a timestamp of when the invoice or it's items were last edited in our database.
   * @example "2021-09-16T09:33:15.212Z"
   */
  updatedAt?: string;
  /**
   * This is copy paste from the version timestamp you provided. You can use this to avoid any merge issues when using the predictions.
   * @example "2021-09-16T09:33:15.212Z"
   */
  version?: string;
}

export interface PredictionInvoiceInput {
  /** Optional callback URL that will be requested with the predictions when the invoice has been predicted */
  callbackURL?: string;
  /**
   * Unique identification of this invoice from YOUR system
   * @example "31241231"
   */
  id: string;
  /**
   * Invoice formatted into our schema. Note - if you have provided both
   * the xml and invoice (JSON), the xml invoice takes precedence if the schema supported.
   */
  invoice?: InvoiceInvoice;
  /** An optional list of prediction models (IDs) to use for predicting this invoice */
  models?: number[];
  /**
   * This is usually the invoice's identification that accountants use.
   * This can be same as id but most likely this is the client's consecutive
   * invoice number that starts from 1 and increases with each invoice.
   * @example "101"
   */
  number?: string;
  /** OCR data for the invoice. Note - if you have provided both the xml and invoice (JSON), the xml invoice takes precedence if the schema supported. */
  ocr?: InvoiceSmartScanInvoice;
  /**
   * Schema defines the invoice type for XML invoices (finvoice, peppol, teapps, or smartscan)
   * @default "finvoice"
   * @example "peppol"
   */
  schema?: "peppol" | "finvoice" | "teapps" | "smartscan";
  /**
   * Original Finvoice or PEPPOL invoice (we will do the parsing). Note - if you have provided both
   * the xml and invoice (JSON), the xml invoice takes precedence if the schema supported.
   * @format base64
   */
  xml?: string;
}

export interface PredictionInvoiceUpdates {
  counterPartyName?: string;
  /**
   * Invoice's due date
   * @example "2021-09-14"
   */
  date?: string;
  /** @example "2021-09-14" */
  periodEndDate?: string;
  /** @example "2021-09-14" */
  periodStartDate?: string;
  /**
   * The status of the invoice
   * @example "PROCESSING"
   */
  status?:
    | "PROCESSING"
    | "COMPLETED"
    | "PENDING"
    | "FAILED"
    | "PRE_COMPLETED"
    | "RETURNING_DATA_REQUESTED"
    | "RETURNING_DATA"
    | "SKIPPED"
    | "DELETED";
}

export interface PredictionItem {
  account?: string;
  description?: string;
  dimensionItemValues?: TypesDimensionItemValues;
  id?: number;
  predictions?: ModelsItemPrediction[];
  transactionId?: string;
  value?: number;
  valueInOriginalCurrency?: number;
  vatDeductionPercent?: number;
  vatPercent?: number;
  vatStatus?: string;
}

export interface ResponseAPIKey {
  apiKey?: string;
  createdAt?: string;
  description?: string;
  prefix?: string;
  scope?: string;
  updatedAt?: string;
}

export interface ResponseCollectionResponseModelsUser {
  count?: number;
  data?: ModelsUser[];
  totalCount?: number;
}

export interface ResponseCollectionResponseModelsVatRate {
  count?: number;
  data?: ModelsVatRate[];
  totalCount?: number;
}

export interface ResponseCollectionResponseModextTeam {
  count?: number;
  data?: ModextTeam[];
  totalCount?: number;
}

export interface ResponseCollectionResponseRouterClientRule {
  count?: number;
  data?: RouterClientRule[];
  totalCount?: number;
}

export interface ResponseCount {
  count?: number;
}

export interface ResponseDataResponse {
  data?: any;
}

export interface ResponseDataWithTimesResponse {
  createdAt?: string;
  data?: any;
  updatedAt?: string;
}

export interface ResponseErrorResponse {
  error?: string;
}

export interface ResponseID {
  id?: any;
}

export interface ResponsePrefix {
  prefix?: string;
}

export interface ResponseToken {
  token?: string;
}

export interface RouterAPIKeyCollection {
  /** @example 123 */
  count?: number;
  data?: ModelsOrganizationKey[];
}

export interface RouterClientCollection {
  /** @example 123 */
  count?: number;
  data?: ModextCollectionClient[];
}

export interface RouterClientRule {
  createdAt?: string;
  /** The external id of the client rule (from the accounting software or another external source) */
  externalId?: string;
  id?: number;
  /** Rule is a JSON object that conforms to the schema found in rules/schema.json */
  rule?: object;
}

export interface RouterInvoiceCollection {
  /** @example 123 */
  count?: number;
  data?: PredictionInvoice[];
}

export interface RouterModelCollection {
  /** @example 123 */
  count?: number;
  data?: ModextPredictionModel[];
}

export interface RouterOrganizationCollection {
  /** @example 123 */
  count?: number;
  data?: ModelsOrganization[];
}

export interface RouterProcessorCollection {
  /** @example 123 */
  count?: number;
  data?: ModelsModelTrainingRequestProcessor[];
}

export interface RouterServerInfo {
  database?: string;
  name?: string;
  version?: string;
}

export interface RouterUploadJobCollection {
  /** @example 123 */
  count?: number;
  data?: ModelsTrainingDataUploadJob[];
}

export interface StorageFileInfo {
  createdAt?: string;
  id?: string;
  key?: string;
}

export interface StorageFileList {
  /** This token acts like a cursor that you can supply to the request to retrieve the next set of invoices */
  continuationToken?: string;
  count?: number;
  files?: StorageFileInfo[];
}

export interface TrainingFile {
  createdAt?: string;
  /** Invoice's id in YOUR system */
  id?: string;
  version?: number;
}

export interface TrainingInvoiceDetails {
  datasetLabels?: string[];
  filename?: string;
  /** Invoice's id in YOUR system */
  id?: string;
  mimeType?: string;
  retentionPolicy?: string;
}

export interface TrainingInvoiceInput {
  /**
   * Invoice's id in YOUR system
   * @example "8214"
   */
  id: string;
  /**
   * Invoice formatted into our schema. Note - if you have provided both
   * the xml and invoice (JSON), the xml invoice takes precedence if the schema supported.
   */
  invoice?: InvoiceInvoice;
  /**
   * These are the final labels that this invoice has received. In the end, all your AI models will be trained to learn the mapping between the invoice's rows and these targets
   * @minItems 1
   */
  invoiceTargets: TrainingInvoiceTarget[];
  /** OCR data for the invoice. Note - if you have provided both the xml and invoice (JSON), the xml invoice takes precedence if the schema supported. */
  ocr?: InvoiceSmartScanInvoice;
  /**
   * Date after which this invoice cannot be used to train a model
   * @example "2022-01-01T00:00:00.000Z"
   */
  retentionPolicy?: string;
  /**
   * Schema defines the invoice type for XML invoices (finvoice, peppol, teapps, or smartscan)
   * @default "finvoice"
   * @example "peppol"
   */
  schema?: "peppol" | "finvoice" | "teapps" | "smartscan";
  /** @example 1631784795212 */
  version?: number;
  /**
   * Original Finvoice or PEPPOL invoice (we will do the parsing). Note - if you have provided both
   * the xml and invoice (JSON), the xml invoice takes precedence if the schema supported.
   * @format base64
   */
  xml?: string;
}

export interface TrainingInvoiceTarget {
  /**
   * Account for the invoice row
   * @example "6780"
   */
  account?: string;
  /**
   * The accounting value. The following calculation should hold true for best performance value = accountingValue * (1 + vatPercent / 100)
   * @example 10
   */
  accountingValue: number;
  /**
   * An optional description for the target. In the ideal case, this is copy pasted from the original invoice
   * @example "Cardboard boxes, Large"
   */
  description?: string;
  /** This is an array of dimensions (including ratios) for the invoice row */
  dimensionItemValues?: InvoiceDimensionItemValue[];
  /**
   * Used for JSON invoices
   * 		This is the corresponding id that this target (account and dimensionItemValues) belong to.
   * 		E.g. id '1231' would be matched from invoice.row[].id = id
   * 		If the id is not known, use empty string ''
   * 		Using '' is relevant e.g. if the accounting has NOT been been made
   * 		on the per row basis but instead after merging the original rows
   * 		into one or few rows in the accounting ledger
   * 		Common case could be telephone invoices where you might have 100 InvoiceLines
   * 		that get merged into one row for the accounting ledger
   * @example "23414"
   */
  id?: string;
  /**
   * Used for XML invoices
   * 		This is the corresponding InvoiceLine from xml that this invoiceTarget (account and dimensionItemValues) belong to
   * 		E.g Index 3 would match the InvoiceLine[3] in the original Finvoice
   * 		If the index is not known, use -1
   * 		Using -1 is relevant e.g. if the accounting has NOT been been made
   * 		on the per row basis but instead after merging the original InvoiceLines
   * 		into one or few rows in the accounting ledger
   * 		Common case could be telephone invoices where you might have 100 InvoiceLines
   * 		that get merged into one row for the accounting ledger
   * @example 1
   */
  index?: number;
  /**
   * The vatPercent of the row. The following calculation should hold true for best performance value = accountingValue * (1 + vatPercent / 100)
   * @example 24
   */
  vatPercent: number;
}

export interface TrainingUploadJob {
  completedAt?: string;
  createdAt?: string;
  id?: string;
  messages?: Record<string, any>[];
  status?: string;
  uploadMethod?: string;
  uploadUrl?: string;
}

export interface TrainingUploadJobInput {
  /** Optional callback URL that will be requested with the predictions when the invoice has been predicted */
  callbackURL?: string;
}

export interface TypesAPIKey {
  description?: string;
  prefix?: string;
  scope?: string;
}

export interface TypesAccount {
  /**
   * Account number or code
   * @example "4000"
   */
  code: string;
  /**
   * Optional description on how the account should be used
   * @example "General account for purchases"
   */
  description?: string;
  /**
   * Human readable account name
   * @example "Purchases"
   */
  name: string;
}

export interface TypesAddress {
  /**
   * Properly formatted city name of the party
   * @example "Tampere"
   */
  city?: string;
  /**
   * Properly formatted email of the contact person
   * @example "harry.tasker@fabricai.fi"
   */
  contactEmail?: string;
  /**
   * Name of possible contact person
   * @example "Harry Tasker"
   */
  contactPersonName?: string;
  /**
   * Properly formatted country code (alpha 2 of ISO 3166). If the country is not known, use UNKNOWN
   * @example "FI"
   */
  country?: string;
  /**
   * Properly formatted domain name of the part
   * @example "www.fabricai.fi"
   */
  domain?: string;
  /**
   * Official identification of the party. For companies, if possible, use a properly formatted VAT Identification number like FI29256309. For individuals: if possible, use OBFUSCATED personal identification like 000000-0000 or 000000A0000
   * @example "FI29256309"
   */
  identifier?: string;
  /**
   * Official name of the party
   * @example "FabricAI Oy"
   */
  name: string;
  /**
   * Properly formatted street name where the party is located
   * @example "Tammelan puistokatu 22"
   */
  street?: string;
  /**
   * Properly formatted zip code of the party
   * @example "33200"
   */
  zip?: string;
}

export interface TypesChildDimension {
  /**
   * Optional description on how the dimension item should be used
   * @example "Marketing and sales expenses"
   */
  description?: string;
  /**
   * Dimension's child item's id in YOUR system
   * @example "marketing"
   */
  id: string;
  /**
   * Optional identification number
   * @example "12345"
   */
  identificationNumber?: string;
  /**
   * Optional array of keywords that apply to this dimension. Usually this can be pulled from some external system
   * @example ["marketing","sales","kp12","kp 12"]
   */
  keywords?: string[];
  /**
   * Human readable name for the dimension item
   * @example "Marketing"
   */
  name: string;
  /** Optional address related to the dimension item */
  relatedAddress?: TypesAddress;
}

export type TypesDimensionItemValues = Record<string, Record<string, number>>;

export type TypesHStore = Record<string, string>;

export interface TypesOrganizationKeyInput {
  description?: string;
  scope?: string;
}

export interface TypesPrediction {
  /**
   * The ACCOUNT or DIMENSION's final label
   * @example "4000"
   */
  account?: string;
  /**
   * Probability of the account (note the sum of all probabilities will be <= 1)
   * @example 0.9231
   */
  probability?: number;
}

export interface TypesRootDimension {
  /**
   * Optional description on how the dimension should be used
   * @example "Cost allocations to different departments"
   */
  description?: string;
  /**
   * Dimension's id in YOUR system
   * @example "123"
   */
  id: string;
  /**
   * List of dimension items that belong to this dimension
   * @minItems 1
   */
  items?: TypesChildDimension[];
  /**
   * Human readable name for the dimension
   * @example "Department"
   */
  name: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://ai.fabricai.io" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title AI Inside
 * @version v2.27.4
 * @termsOfService https://fabricai.fi
 * @baseUrl https://ai.fabricai.io
 * @contact API Support (https://fabricai.fi)
 *
 * AI Inside by FabricAI provides a mass customizable state-of-the-art Artificial Intelligence for purchase invoice processes.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description Get information about API
 *
 * @tags General
 * @name Index
 * @summary Index
 * @request GET:/
 * @response `200` `(ResponseDataResponse & {
    data?: RouterServerInfo,

})` OK
 */
  index = (params: RequestParams = {}) =>
    this.request<
      ResponseDataResponse & {
        data?: RouterServerInfo;
      },
      any
    >({
      path: `/`,
      method: "GET",
      format: "json",
      ...params,
    });

  clients = {
    /**
     * @description Get all clients beloning to  organization or provider
     *
     * @tags Clients
     * @name GetClients
     * @summary Get all clients
     * @request GET:/clients
     * @secure
     * @response `200` `RouterClientCollection` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getClients: (
      query?: {
        createdAt?: string[];
        /**
         * @min 0
         * @max 50
         * @default 50
         */
        limit?: number;
        name?: string[];
        /** @default "asc" */
        order?: string;
        /** @default "id" */
        orderBy?: string;
        organizationId?: string[];
        /**
         * @min 1
         * @default 1
         */
        page?: number;
        tags?: string[];
        updatedAt?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RouterClientCollection, ResponseErrorResponse>({
        path: `/clients`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new client under the authenticated organization
 *
 * @tags Clients
 * @name CreateClient
 * @summary Create client
 * @request POST:/clients
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ModextClient,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createClient: (client: ModextClient, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextClient;
        },
        ResponseErrorResponse
      >({
        path: `/clients`,
        method: "POST",
        body: client,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the JSON schema for client rules
     *
     * @tags Rules
     * @name GetClientRuleSchema
     * @summary Get the client rule JSON schema
     * @request GET:/clients/rules/schema.json
     * @secure
     * @response `200` `void` OK
     */
    getClientRuleSchema: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/clients/rules/schema.json`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Get detailed information about a client
 *
 * @tags Clients
 * @name GetClient
 * @summary Get client by ID
 * @request GET:/clients/{clientId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextClient,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getClient: (clientId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextClient;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete a client from the organization
 *
 * @tags Clients
 * @name DeleteClient
 * @summary Delete client
 * @request DELETE:/clients/{clientId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteClient: (clientId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update client information
 *
 * @tags Clients
 * @name UpdateClient
 * @summary Update client
 * @request PATCH:/clients/{clientId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextClient,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateClient: (clientId: number, client: ModextClient, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextClient;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}`,
        method: "PATCH",
        body: client,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Update client's automation
 *
 * @tags Clients
 * @name UpdateClientAutomation
 * @summary Update client automation
 * @request PATCH:/clients/{clientId}/automations/{automationId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModelsClientAutomation,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateClientAutomation: (
      clientId: number,
      automationId: number,
      automation: ModelsClientAutomation,
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsClientAutomation;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/automations/${automationId}`,
        method: "PATCH",
        body: automation,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve client's chart of accounts (COA)
 *
 * @tags Clients
 * @name GetClientCoa
 * @summary Get client COA
 * @request GET:/clients/{clientId}/coa
 * @secure
 * @response `200` `(ResponseDataWithTimesResponse & {
    data?: (TypesAccount)[],

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getClientCoa: (clientId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataWithTimesResponse & {
          data?: TypesAccount[];
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/coa`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update client's chart of accounts (COA)
 *
 * @tags Clients
 * @name UpdateClientCoa
 * @summary Update client COA
 * @request PUT:/clients/{clientId}/coa
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: (TypesAccount)[],

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateClientCoa: (clientId: number, COA: TypesAccount[], params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: TypesAccount[];
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/coa`,
        method: "PUT",
        body: COA,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve client's dimensions
 *
 * @tags Clients
 * @name GetClientDimensions
 * @summary Get client dimensions
 * @request GET:/clients/{clientId}/dimensions
 * @secure
 * @response `200` `(ResponseDataWithTimesResponse & {
    data?: (TypesRootDimension)[],

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getClientDimensions: (clientId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataWithTimesResponse & {
          data?: TypesRootDimension[];
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/dimensions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update client's dimensions
 *
 * @tags Clients
 * @name UpdateClientDimensions
 * @summary Update client dimensions
 * @request PUT:/clients/{clientId}/dimensions
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: (TypesRootDimension)[],

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateClientDimensions: (clientId: number, dimensions: TypesRootDimension[], params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: TypesRootDimension[];
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/dimensions`,
        method: "PUT",
        body: dimensions,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Query a list of invoices that have been predicted
     *
     * @tags Invoices
     * @name GetInvoices
     * @summary Get all predicted invoices
     * @request GET:/clients/{clientId}/invoices
     * @secure
     * @response `200` `RouterInvoiceCollection` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getInvoices: (
      clientId: number,
      query?: {
        counterPartyName?: string[];
        date?: string[];
        invoiceNumber?: string[];
        /**
         * @min 0
         * @max 50
         * @default 50
         */
        limit?: number;
        /** @default "asc" */
        order?: string;
        /** @default "id" */
        orderBy?: string;
        /**
         * @min 1
         * @default 1
         */
        page?: number;
        predictedAt?: string[];
        status?: string[];
        total?: string[];
        totalProbability?: string[];
        updatedAt?: string[];
        version?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RouterInvoiceCollection, ResponseErrorResponse>({
        path: `/clients/${clientId}/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new invoice into the database
 *
 * @tags Invoices
 * @name CreateInvoice
 * @summary Create invoice
 * @request POST:/clients/{clientId}/invoices
 * @secure
 * @response `202` `(ResponseDataResponse & {
    data?: PredictionDetailedInvoice,

})` Accepted
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createInvoice: (clientId: number, invoice: PredictionInvoiceInput, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: PredictionDetailedInvoice;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices`,
        method: "POST",
        body: invoice,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Bulk delete all invoices from the database
 *
 * @tags Invoices
 * @name DeleteAllInvoices
 * @summary Delete all invoices
 * @request DELETE:/clients/{clientId}/invoices
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteAllInvoices: (
      clientId: number,
      query?: {
        /** This is a failsafe flag that needs to be set to true for this endpoint to take effect */
        deleteAll?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Query more detailed information about an invoice
 *
 * @tags Invoices
 * @name GetInvoice
 * @summary Get invoice by ID
 * @request GET:/clients/{clientId}/invoices/{invoiceId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: PredictionDetailedInvoice,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getInvoice: (
      invoiceId: string,
      clientId: number,
      query?: {
        /** Whether to merge invoice rows such that any rows with the same account, vat status, dimensions, vat deduction percent, and vat percent are merged. */
        merge?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: PredictionDetailedInvoice;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete an invoice from the database
 *
 * @tags Invoices
 * @name DeleteInvoice
 * @summary Delete invoice
 * @request DELETE:/clients/{clientId}/invoices/{invoiceId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteInvoice: (invoiceId: string, clientId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update an existing invoices information
 *
 * @tags Invoices
 * @name UpdateInvoice
 * @summary Update invoice
 * @request PATCH:/clients/{clientId}/invoices/{invoiceId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: PredictionDetailedInvoice,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateInvoice: (
      invoiceId: string,
      clientId: number,
      updates: PredictionInvoiceUpdates,
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: PredictionDetailedInvoice;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}`,
        method: "PATCH",
        body: updates,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Add an invoice item to an invoice
 *
 * @tags Invoices
 * @name AddInvoiceItem
 * @summary Add invoice item
 * @request POST:/clients/{clientId}/invoices/{invoiceId}/items
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ModelsInvoiceItem,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    addInvoiceItem: (invoiceId: string, clientId: number, invoiceItem: ModelsInvoiceItem, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsInvoiceItem;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}/items`,
        method: "POST",
        body: invoiceItem,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an invoice item
     *
     * @tags Invoices
     * @name DeleteInvoiceItem
     * @summary Delete invoice item
     * @request DELETE:/clients/{clientId}/invoices/{invoiceId}/items/{itemId}
     * @secure
     * @response `204` `void` No Content
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    deleteInvoiceItem: (invoiceId: string, clientId: number, itemId: number, params: RequestParams = {}) =>
      this.request<void, ResponseErrorResponse>({
        path: `/clients/${clientId}/invoices/${invoiceId}/items/${itemId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Update an invoice item
 *
 * @tags Invoices
 * @name UpdateInvoiceItem
 * @summary Update invoice item
 * @request PATCH:/clients/{clientId}/invoices/{invoiceId}/items/{itemId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModelsInvoiceItem,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateInvoiceItem: (
      invoiceId: string,
      clientId: number,
      itemId: number,
      invoiceItem: ModelsInvoiceItem,
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsInvoiceItem;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}/items/${itemId}`,
        method: "PATCH",
        body: invoiceItem,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Add a process note to an invoice
 *
 * @tags Invoices
 * @name AddInvoiceProcessNote
 * @summary Add invoice process note
 * @request POST:/clients/{clientId}/invoices/{invoiceId}/processNotes
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ModelsInvoiceProcessNote,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    addInvoiceProcessNote: (
      invoiceId: string,
      clientId: number,
      processNote: ModelsInvoiceProcessNote,
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsInvoiceProcessNote;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/invoices/${invoiceId}/processNotes`,
        method: "POST",
        body: processNote,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of client's prediction models
     *
     * @tags Prediction Models
     * @name GetPredictionModels
     * @summary Get all prediction models
     * @request GET:/clients/{clientId}/models
     * @secure
     * @response `200` `RouterModelCollection` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getPredictionModels: (clientId: number, params: RequestParams = {}) =>
      this.request<RouterModelCollection, ResponseErrorResponse>({
        path: `/clients/${clientId}/models`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Initialize a new prediction model and request training for it
 *
 * @tags Prediction Models
 * @name CreatePredictionModel
 * @summary Create prediction model
 * @request POST:/clients/{clientId}/models
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ModextPredictionModel,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createPredictionModel: (
      clientId: number,
      modelTrainingRequest: ModextModelTrainingRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextPredictionModel;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/models`,
        method: "POST",
        body: modelTrainingRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete an existing prediction model
 *
 * @tags Prediction Models
 * @name DeletePredictionModel
 * @summary Delete a prediction model
 * @request DELETE:/clients/{clientId}/models/{modelId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deletePredictionModel: (clientId: number, modelId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/models/${modelId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get client rules
     *
     * @tags Rules
     * @name GetClientRules
     * @summary Get client rules
     * @request GET:/clients/{clientId}/rules
     * @secure
     * @response `200` `ResponseCollectionResponseRouterClientRule` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getClientRules: (
      clientId: number,
      query?: {
        externalId?: string[];
        id?: string[];
        /**
         * @min 0
         * @max 50
         * @default 50
         */
        limit?: number;
        /** @default "asc" */
        order?: string;
        /** @default "id" */
        orderBy?: string;
        /**
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponseCollectionResponseRouterClientRule, ResponseErrorResponse>({
        path: `/clients/${clientId}/rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new client rule
 *
 * @tags Rules
 * @name CreateClientRule
 * @summary Create client rule
 * @request POST:/clients/{clientId}/rules
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: RouterClientRule,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createClientRule: (clientId: number, rule: RouterClientRule, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: RouterClientRule;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/rules`,
        method: "POST",
        body: rule,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a client rule
     *
     * @tags Rules
     * @name DeleteClientRule
     * @summary Delete client rule
     * @request DELETE:/clients/{clientId}/rules/{ruleId}
     * @secure
     * @response `204` `void` No Content
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    deleteClientRule: (clientId: number, ruleId: number, params: RequestParams = {}) =>
      this.request<void, ResponseErrorResponse>({
        path: `/clients/${clientId}/rules/${ruleId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Get a listing of client's training invoices
 *
 * @tags Training Data
 * @name GetTrainingInvoices
 * @summary Get all training invoices
 * @request GET:/clients/{clientId}/training/invoices
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: StorageFileList,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getTrainingInvoices: (
      clientId: number,
      query?: {
        continuationToken?: string;
        /**
         * @min 1
         * @max 1000
         * @default 1000
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: StorageFileList;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Upload and validate a single training invoice
 *
 * @tags Training Data
 * @name UploadTrainingInvoice
 * @summary Upload training invoice
 * @request POST:/clients/{clientId}/training/invoices
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: TrainingInvoiceDetails,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    uploadTrainingInvoice: (clientId: number, trainingInvoice: TrainingInvoiceInput, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: TrainingInvoiceDetails;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/invoices`,
        method: "POST",
        body: trainingInvoice,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Bulk delete all training invoices
 *
 * @tags Training Data
 * @name DeleteAllTrainingInvoices
 * @summary Delete all training invoices
 * @request DELETE:/clients/{clientId}/training/invoices
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseCount,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteAllTrainingInvoices: (
      clientId: number,
      query?: {
        /** This is a failsafe flag that needs to be set to true for this endpoint to take effect */
        deleteAll?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseCount;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/invoices`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download a single training invoice
     *
     * @tags Training Data
     * @name DownloadTrainingInvoice
     * @summary Download training invoice
     * @request GET:/clients/{clientId}/training/invoices/{filename}
     * @secure
     * @response `200` `TrainingFile` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    downloadTrainingInvoice: (clientId: number, filename: string, params: RequestParams = {}) =>
      this.request<TrainingFile, ResponseErrorResponse>({
        path: `/clients/${clientId}/training/invoices/${filename}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete a single training invoice
 *
 * @tags Training Data
 * @name DeleteTrainingInvoice
 * @summary Delete training invoice
 * @request DELETE:/clients/{clientId}/training/invoices/{filename}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteTrainingInvoice: (clientId: number, filename: string, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/invoices/${filename}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all bulk upload jobs for a client
     *
     * @tags Training Data
     * @name GetUploadJobs
     * @summary Get all upload jobs
     * @request GET:/clients/{clientId}/training/jobs
     * @secure
     * @response `200` `RouterUploadJobCollection` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getUploadJobs: (
      clientId: number,
      query?: {
        completedAt?: string[];
        createdAt?: string[];
        /**
         * @min 0
         * @max 50
         * @default 50
         */
        limit?: number;
        /** @default "asc" */
        order?: string;
        /** @default "id" */
        orderBy?: string;
        /**
         * @min 1
         * @default 1
         */
        page?: number;
        status?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RouterUploadJobCollection, ResponseErrorResponse>({
        path: `/clients/${clientId}/training/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a bulk upload job for sending a set of gzipped training invoices
 *
 * @tags Training Data
 * @name CreateUploadJob
 * @summary Create upload job
 * @request POST:/clients/{clientId}/training/jobs
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: TrainingUploadJob,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createUploadJob: (clientId: number, jobInput: TrainingUploadJobInput, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: TrainingUploadJob;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/jobs`,
        method: "POST",
        body: jobInput,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Get detailed information about a single bulk upload job
 *
 * @tags Training Data
 * @name GetUploadJob
 * @summary Get upload job by ID
 * @request GET:/clients/{clientId}/training/jobs/{jobId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: TrainingUploadJob,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getUploadJob: (clientId: number, jobId: string, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: TrainingUploadJob;
        },
        ResponseErrorResponse
      >({
        path: `/clients/${clientId}/training/jobs/${jobId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get VAT rates for a client
     *
     * @tags Clients
     * @name GetVatRates
     * @summary Get VAT rates for a client
     * @request GET:/clients/{clientId}/vatRates
     * @secure
     * @response `200` `ResponseCollectionResponseModelsVatRate` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `404` `ResponseErrorResponse` Not Found
     */
    getVatRates: (clientId: number, params: RequestParams = {}) =>
      this.request<ResponseCollectionResponseModelsVatRate, ResponseErrorResponse>({
        path: `/clients/${clientId}/vatRates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  organization = {
    /**
 * @description Get information about the currently authenticated organization
 *
 * @tags Organizations
 * @name GetOrganization
 * @summary Get organization (as organization)
 * @request GET:/organization
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextOrganization,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getOrganization: (params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextOrganization;
        },
        ResponseErrorResponse
      >({
        path: `/organization`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update details about the currently authenticated organization
 *
 * @tags Organizations
 * @name UpdateOrganization
 * @summary Update organization (as organization)
 * @request PATCH:/organization
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextOrganization,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateOrganization: (organization: ModelsOrganization, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextOrganization;
        },
        ResponseErrorResponse
      >({
        path: `/organization`,
        method: "PATCH",
        body: organization,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  organizations = {
    /**
     * @description Get all of the provider's organizations
     *
     * @tags Organizations
     * @name GetOrganizations
     * @summary Get all organizations
     * @request GET:/organizations
     * @secure
     * @response `200` `RouterOrganizationCollection` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getOrganizations: (
      query?: {
        createdAt?: string[];
        /**
         * @min 0
         * @max 50
         * @default 50
         */
        limit?: number;
        name?: string[];
        /** @default "asc" */
        order?: string;
        /** @default "id" */
        orderBy?: string;
        /**
         * @min 1
         * @default 1
         */
        page?: number;
        tags?: string[];
        updatedAt?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RouterOrganizationCollection, ResponseErrorResponse>({
        path: `/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new organization
 *
 * @tags Organizations
 * @name CreateOrganization
 * @summary Create organization
 * @request POST:/organizations
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ModelsOrganization,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createOrganization: (organization: ModelsOrganization, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsOrganization;
        },
        ResponseErrorResponse
      >({
        path: `/organizations`,
        method: "POST",
        body: organization,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Get information about a specific organization
 *
 * @tags Organizations
 * @name GetOrganizationAsProvider
 * @summary Get organization by ID (as provider)
 * @request GET:/organizations/{orgId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModelsOrganization,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getOrganizationAsProvider: (orgId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsOrganization;
        },
        ResponseErrorResponse
      >({
        path: `/organizations/${orgId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete an organization
 *
 * @tags Organizations
 * @name DeleteOrganization
 * @summary Delete organization
 * @request DELETE:/organizations/{orgId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseID,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteOrganization: (orgId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseID;
        },
        ResponseErrorResponse
      >({
        path: `/organizations/${orgId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update organization information
 *
 * @tags Organizations
 * @name UpdateOrganizationAsProvider
 * @summary Update organization (as provider)
 * @request PATCH:/organizations/{orgId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModelsOrganization,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateOrganizationAsProvider: (orgId: number, organization: ModelsOrganization, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsOrganization;
        },
        ResponseErrorResponse
      >({
        path: `/organizations/${orgId}`,
        method: "PATCH",
        body: organization,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get organizations clients as a provider
     *
     * @tags Organizations
     * @name GetOrganizationClientsAsProvider
     * @summary Get organization clients (as provider)
     * @request GET:/organizations/{orgId}/clients
     * @secure
     * @response `200` `RouterClientCollection` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getOrganizationClientsAsProvider: (orgId: number, params: RequestParams = {}) =>
      this.request<RouterClientCollection, ResponseErrorResponse>({
        path: `/organizations/${orgId}/clients`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of specific organization's API keys
     *
     * @tags Organizations
     * @name GetOrganizationKeys
     * @summary Get organization API keys
     * @request GET:/organizations/{orgId}/keys
     * @secure
     * @response `200` `RouterAPIKeyCollection` OK
     * @response `400` `ResponseErrorResponse` Bad Request
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getOrganizationKeys: (orgId: number, params: RequestParams = {}) =>
      this.request<RouterAPIKeyCollection, ResponseErrorResponse>({
        path: `/organizations/${orgId}/keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new API key for an organization
 *
 * @tags Organizations
 * @name CreateOrganizationKey
 * @summary Create organization API key
 * @request POST:/organizations/{orgId}/keys
 * @secure
 * @response `201` `(ResponseDataResponse & {
    data?: ResponseAPIKey,

})` Created
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createOrganizationKey: (orgId: number, key: TypesOrganizationKeyInput, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseAPIKey;
        },
        ResponseErrorResponse
      >({
        path: `/organizations/${orgId}/keys`,
        method: "POST",
        body: key,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Delete API key for the organization
 *
 * @tags Organizations
 * @name DeleteOrganizationKey
 * @summary Delete organization API key
 * @request DELETE:/organizations/{orgId}/keys/{keyPrefix}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponsePrefix,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    deleteOrganizationKey: (orgId: number, keyPrefix: string, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponsePrefix;
        },
        ResponseErrorResponse
      >({
        path: `/organizations/${orgId}/keys/${keyPrefix}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  processors = {
    /**
     * @description Query a list of model training request processors
     *
     * @tags Prediction Models
     * @name GetProcessors
     * @summary Get all model processors
     * @request GET:/processors
     * @secure
     * @response `200` `RouterProcessorCollection` OK
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getProcessors: (params: RequestParams = {}) =>
      this.request<RouterProcessorCollection, ResponseErrorResponse>({
        path: `/processors`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  provider = {
    /**
 * @description Get information about the currently authenticated provider
 *
 * @tags Provider
 * @name GetProvider
 * @summary Get provider
 * @request GET:/provider
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModelsProvider,

})` OK
 */
    getProvider: (params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModelsProvider;
        },
        any
      >({
        path: `/provider`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  routes = {
    /**
 * @description Get a list of all routes in the API
 *
 * @tags General
 * @name Routes
 * @summary Routes
 * @request GET:/routes
 * @response `200` `(ResponseDataResponse & {
    data?: (string)[],

})` OK
 */
    routes: (params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: string[];
        },
        any
      >({
        path: `/routes`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  teams = {
    /**
     * @description Return all teams for an organization
     *
     * @tags Teams
     * @name GetTeams
     * @summary Get organization's teams
     * @request GET:/teams
     * @secure
     * @response `200` `ResponseCollectionResponseModextTeam` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getTeams: (params: RequestParams = {}) =>
      this.request<ResponseCollectionResponseModextTeam, ResponseErrorResponse>({
        path: `/teams`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new team with specified details
 *
 * @tags Teams
 * @name CreateTeam
 * @summary Create a team
 * @request POST:/teams
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextTeam,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createTeam: (team: ModextTeam, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextTeam;
        },
        ResponseErrorResponse
      >({
        path: `/teams`,
        method: "POST",
        body: team,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Fetch details for a given team based on team ID
 *
 * @tags Teams
 * @name GetTeam
 * @summary Get a team
 * @request GET:/teams/{teamId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextTeam,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getTeam: (teamId: number, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextTeam;
        },
        ResponseErrorResponse
      >({
        path: `/teams/${teamId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update an existing team with specified details
 *
 * @tags Teams
 * @name UpdateTeam
 * @summary Update a team
 * @request PUT:/teams/{teamId}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextTeam,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateTeam: (teamId: number, team: ModextTeam, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextTeam;
        },
        ResponseErrorResponse
      >({
        path: `/teams/${teamId}`,
        method: "PUT",
        body: team,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified team
     *
     * @tags Teams
     * @name DeleteTeam
     * @summary Delete a team
     * @request DELETE:/teams/{teamId}
     * @secure
     * @response `200` `ResponseID` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    deleteTeam: (teamId: number, params: RequestParams = {}) =>
      this.request<ResponseID, ResponseErrorResponse>({
        path: `/teams/${teamId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  token = {
    /**
 * @description Generate a new authentication token (JWT) for the organization
 *
 * @tags Organizations
 * @name GetOrganizationToken
 * @summary Issue organization JWT
 * @request GET:/token
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ResponseToken,

})` OK
 * @response `400` `ResponseErrorResponse` Bad Request
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getOrganizationToken: (params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ResponseToken;
        },
        ResponseErrorResponse
      >({
        path: `/token`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Return all users for an organization
     *
     * @tags Users
     * @name GetUsers
     * @summary Get organization's users
     * @request GET:/users
     * @secure
     * @response `200` `ResponseCollectionResponseModelsUser` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    getUsers: (
      query?: {
        /** Filter by email address */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponseCollectionResponseModelsUser, ResponseErrorResponse>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a new user with specified details > When the `authProvider` field is set, the user is created without password login and is pre-linked to an external authentication provider. > This is useful when you want to provide OAuth provider login support out of the box , > without requiring the user to manually link the FabricAI and external accounts together.
 *
 * @tags Users
 * @name CreateUser
 * @summary Create a user
 * @request POST:/users
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextUser,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    createUser: (
      user: ModextUser,
      query?: {
        /**
         * Whether to register Mailchimp contact
         * @default true
         */
        mailchimp?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextUser;
        },
        ResponseErrorResponse
      >({
        path: `/users`,
        method: "POST",
        query: query,
        body: user,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Fetch details for a given user based on user ID
 *
 * @tags Users
 * @name GetUser
 * @summary Get a user
 * @request GET:/users/{uid}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextUser,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    getUser: (uid: string, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextUser;
        },
        ResponseErrorResponse
      >({
        path: `/users/${uid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Update an existing user with specified details
 *
 * @tags Users
 * @name UpdateUser
 * @summary Update a user
 * @request PUT:/users/{uid}
 * @secure
 * @response `200` `(ResponseDataResponse & {
    data?: ModextUser,

})` OK
 * @response `401` `ResponseErrorResponse` Unauthorized
 * @response `403` `ResponseErrorResponse` Forbidden
 * @response `404` `ResponseErrorResponse` Not Found
 * @response `500` `ResponseErrorResponse` Internal Server Error
 */
    updateUser: (uid: string, user: ModextUser, params: RequestParams = {}) =>
      this.request<
        ResponseDataResponse & {
          data?: ModextUser;
        },
        ResponseErrorResponse
      >({
        path: `/users/${uid}`,
        method: "PUT",
        body: user,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified user
     *
     * @tags Users
     * @name DeleteUser
     * @summary Delete a user
     * @request DELETE:/users/{uid}
     * @secure
     * @response `200` `ResponseID` OK
     * @response `401` `ResponseErrorResponse` Unauthorized
     * @response `403` `ResponseErrorResponse` Forbidden
     * @response `404` `ResponseErrorResponse` Not Found
     * @response `500` `ResponseErrorResponse` Internal Server Error
     */
    deleteUser: (uid: string, params: RequestParams = {}) =>
      this.request<ResponseID, ResponseErrorResponse>({
        path: `/users/${uid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
