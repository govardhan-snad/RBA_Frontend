export interface Permission {
  field: string;
  read: boolean;
  write: boolean;
}

export interface ParentObject {
  [key: string]: {
    read: boolean;
    write: boolean;
  };
}
