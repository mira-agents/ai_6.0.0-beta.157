/** @group Text Generation */
export {
  generateText,
  type GenerateTextOnFinishCallback,
  type GenerateTextOnStepFinishCallback,
} from './generate-text';
/** @group Prompts */
export type { ContentPart } from './content-part';
/** @group Text Generation */
export type { GenerateTextResult } from './generate-text-result';
/** @group Text Generation */
export type {
  GeneratedFile as Experimental_GeneratedImage, // Image for backwards compatibility, TODO remove in v5
  GeneratedFile,
} from './generated-file';
/** @group Text Generation */
export * as Output from './output';
/** @group Text Generation */
export type {
  InferCompleteOutput as InferGenerateOutput,
  InferPartialOutput as InferStreamOutput,
} from './output-utils';
/** @group Prompts */
export type { PrepareStepFunction, PrepareStepResult } from './prepare-step';
/** @group Prompts */
export { pruneMessages } from './prune-messages';
/** @group Text Generation */
export type { ReasoningOutput } from './reasoning-output';
/** @group Text Generation */
export { smoothStream, type ChunkDetector } from './smooth-stream';
/** @group Text Generation */
export type { StepResult } from './step-result';
/** @group Text Generation */
export { hasToolCall, stepCountIs, type StopCondition } from './stop-condition';
/** @group Text Generation */
export {
  streamText,
  type StreamTextOnChunkCallback,
  type StreamTextOnErrorCallback,
  type StreamTextOnFinishCallback,
  type StreamTextOnStepFinishCallback,
  type StreamTextTransform,
} from './stream-text';
/** @group Text Generation */
export type {
  StreamTextResult,
  TextStreamPart,
  UIMessageStreamOptions,
} from './stream-text-result';
/** @group Tools */
export type { ToolApprovalRequestOutput } from './tool-approval-request-output';
/** @group Tools */
export type {
  DynamicToolCall,
  StaticToolCall,
  TypedToolCall,
} from './tool-call';
/** @group Tools */
export type { ToolCallRepairFunction } from './tool-call-repair-function';
/** @group Tools */
export type {
  DynamicToolError,
  StaticToolError,
  TypedToolError,
} from './tool-error';
/** @group Tools */
export type {
  StaticToolOutputDenied,
  TypedToolOutputDenied,
} from './tool-output-denied';
/** @group Tools */
export type {
  DynamicToolResult,
  StaticToolResult,
  TypedToolResult,
} from './tool-result';
/** @group Tools */
export type { ToolSet } from './tool-set';
