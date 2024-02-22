export interface MessageModel {
    _id  ?: string;
    sender: string;
    receiver: string;
    message: string
    contentType : "TEXT" | "IMAGE";
    createdAt ?: Date;
    updatedAt ?: Date;
  }
  