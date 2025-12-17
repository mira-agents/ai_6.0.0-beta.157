/** @group Prompts */
export type { CallSettings } from './call-settings';
/** @group Prompts */
export {
  assistantModelMessageSchema,
  modelMessageSchema,
  systemModelMessageSchema,
  toolModelMessageSchema,
  userModelMessageSchema,
} from './message';
/** @group Prompts */
export type { Prompt } from './prompt';

// re-export types from provider-utils
/** @group Prompts */
export type {
  AssistantContent,
  AssistantModelMessage,
  DataContent,
  FilePart,
  ImagePart,
  ModelMessage,
  SystemModelMessage,
  TextPart,
  ToolCallPart,
  ToolContent,
  ToolModelMessage,
  ToolResultPart,
  UserContent,
  UserModelMessage,
} from '@ai-sdk/provider-utils';
