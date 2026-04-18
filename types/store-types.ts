export interface DynamicNode {
  id: string;
  type: "information-note" | "additional-attachment";
  title: string;
  content: string;
  insertAfterIndex: number;
}

export interface DynamicNodesSlice {
  dynamicNodes: DynamicNode[];
  addDynamicNode: (node: Omit<DynamicNode, "id">) => void;
  removeDynamicNode: (id: string) => void;
}

export interface AiSlice {
  aiLoadingNodeTitle: string | null;
  aiResponseMap: Record<string, string>;
  setAiLoading: (nodeTitle: string | null) => void;
  setAiResponse: (nodeTitle: string, response: string) => void;
}

export interface ClaimSlice {
  expandedNodes: Set<string>;
  toggleNode: (nodeTitle: string) => void;
  setNodeExpanded: (nodeTitle: string, expanded: boolean) => void;
}
