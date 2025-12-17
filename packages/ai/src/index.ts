// re-exports:
/** @group Providers */
export { createGateway, gateway, type GatewayModelId } from '@ai-sdk/gateway';
/** @group Schema */
export {
  asSchema,
  jsonSchema,
  zodSchema,
  type FlexibleSchema,
  type InferSchema,
  type Schema,
} from '@ai-sdk/provider-utils';
/** @group Utilities */
export {
  createIdGenerator,
  generateId,
  type IdGenerator,
} from '@ai-sdk/provider-utils';
/** @group Tools */
export {
  dynamicTool,
  tool,
  type InferToolInput,
  type InferToolOutput,
  type Tool,
  type ToolApprovalRequest,
  type ToolApprovalResponse,
  type ToolCallOptions,
  type ToolExecutionOptions,
  type ToolExecuteFunction,
} from '@ai-sdk/provider-utils';
/** @group Streaming */
export { parseJsonEventStream } from '@ai-sdk/provider-utils';

// directory exports
export * from './agent';
export * from './embed';
export * from './error';
export * from './generate-image';
export * from './generate-object';
export * from './generate-speech';
export * from './generate-text';
export * from './logger';
export * from './middleware';
export * from './prompt';
export * from './registry';
export * from './rerank';
export * from './text-stream';
export * from './transcribe';
export * from './types';
export * from './ui';
export * from './ui-message-stream';
export * from './util';

// telemetry types:
/** @group Telemetry & Logging */
export type { TelemetrySettings } from './telemetry/telemetry-settings';

// import globals
import './global';
