const REMOVE_LEGAL = 'legals/REMOVE_LEGAL';

export {
  REMOVE_LEGAL,
}

interface ActionRemoveLegal {
  type: typeof REMOVE_LEGAL,
  id: number,
}

export type LegalActions = ActionRemoveLegal;
