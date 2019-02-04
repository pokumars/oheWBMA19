export interface Pic {
  file_id: number;
  filename: string;
  filesize: string;
  title: string;
  description: string;
  user_id: number;
  media_type?: string;
  mime_type: string;
  time_added: string;
  screenshot?: string;
  thumbnails?: object;
  tag?: string;
  tag_id?: number;
}


export interface TagsResponse {
  file_id: number;
  tag: string;
  filename: string;
  user_id: number;
  description: string;
  filesize: number;
  mime_type: string;
  tag_id: number;
  time_added: string;
  title: string;
}

