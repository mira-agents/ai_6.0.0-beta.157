/** @group Prompts */
export type {
  AssistantContent,
  AssistantModelMessage,
} from './assistant-model-message';
/** @group Prompts */
export type {
  FilePart,
  ImagePart,
  ReasoningPart,
  TextPart,
  ToolCallPart,
  ToolResultOutput,
  ToolResultPart,
} from './content-part';
/** @group Prompts */
export type { DataContent } from './data-content';
/** @group Tools */
export { executeTool } from './execute-tool';
/** @group Prompts */
export type { ModelMessage } from './model-message';
/** @group Providers */
export type { ProviderOptions } from './provider-options';
/** @group Prompts */
export type { SystemModelMessage } from './system-model-message';
/** @group Tools */
export {
  dynamicTool,
  tool,
  type InferToolInput,
  type InferToolOutput,
  type Tool,
  type ToolExecutionOptions,
  type ToolExecuteFunction,
  type ToolNeedsApprovalFunction,
} from './tool';
/** @group Tools */
export type { ToolApprovalRequest } from './tool-approval-request';
/** @group Tools */
export type { ToolApprovalResponse } from './tool-approval-response';
/** @group Tools */
export type { ToolCall } from './tool-call';
/** @group Prompts */
export type { ToolContent, ToolModelMessage } from './tool-model-message';
/** @group Tools */
export type { ToolResult } from './tool-result';
/** @group Prompts */
export type { UserContent, UserModelMessage } from './user-model-message';
import type { ToolExecutionOptions } from './tool';

/**
 * @deprecated Use ToolExecutionOptions instead.
 * @group Tools
 */
export type ToolCallOptions = ToolExecutionOptions;
