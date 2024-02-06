export interface MessageModel {
    _id  ?: string;
    sender: string;
    receiver: string;
    message: string;
    createdAt ?: Date;
    updatedAt ?: Date;
  }
  