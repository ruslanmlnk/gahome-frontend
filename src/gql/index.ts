import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  home: Maybe<HomeAccess>;
  media: Maybe<MediaAccess>;
  pages: Maybe<PagesAccess>;
  payload_locked_documents: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences: Maybe<Payload_PreferencesAccess>;
  users: Maybe<UsersAccess>;
};

export type Home = {
  __typename?: 'Home';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  meta: Maybe<Home_Meta>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomeDocAccessFields = {
  __typename?: 'HomeDocAccessFields';
  createdAt: Maybe<HomeDocAccessFields_CreatedAt>;
  meta: Maybe<HomeDocAccessFields_Meta>;
  updatedAt: Maybe<HomeDocAccessFields_UpdatedAt>;
};

export type HomeDocAccessFields_CreatedAt = {
  __typename?: 'HomeDocAccessFields_createdAt';
  create: Maybe<HomeDocAccessFields_CreatedAt_Create>;
  delete: Maybe<HomeDocAccessFields_CreatedAt_Delete>;
  read: Maybe<HomeDocAccessFields_CreatedAt_Read>;
  update: Maybe<HomeDocAccessFields_CreatedAt_Update>;
};

export type HomeDocAccessFields_CreatedAt_Create = {
  __typename?: 'HomeDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Read = {
  __typename?: 'HomeDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Update = {
  __typename?: 'HomeDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta = {
  __typename?: 'HomeDocAccessFields_meta';
  create: Maybe<HomeDocAccessFields_Meta_Create>;
  delete: Maybe<HomeDocAccessFields_Meta_Delete>;
  fields: Maybe<HomeDocAccessFields_Meta_Fields>;
  read: Maybe<HomeDocAccessFields_Meta_Read>;
  update: Maybe<HomeDocAccessFields_Meta_Update>;
};

export type HomeDocAccessFields_Meta_Create = {
  __typename?: 'HomeDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_Delete = {
  __typename?: 'HomeDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_Fields = {
  __typename?: 'HomeDocAccessFields_meta_Fields';
  metaDescription: Maybe<HomeDocAccessFields_Meta_MetaDescription>;
  metaTitle: Maybe<HomeDocAccessFields_Meta_MetaTitle>;
};

export type HomeDocAccessFields_Meta_Read = {
  __typename?: 'HomeDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_Update = {
  __typename?: 'HomeDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaDescription = {
  __typename?: 'HomeDocAccessFields_meta_metaDescription';
  create: Maybe<HomeDocAccessFields_Meta_MetaDescription_Create>;
  delete: Maybe<HomeDocAccessFields_Meta_MetaDescription_Delete>;
  read: Maybe<HomeDocAccessFields_Meta_MetaDescription_Read>;
  update: Maybe<HomeDocAccessFields_Meta_MetaDescription_Update>;
};

export type HomeDocAccessFields_Meta_MetaDescription_Create = {
  __typename?: 'HomeDocAccessFields_meta_metaDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaDescription_Delete = {
  __typename?: 'HomeDocAccessFields_meta_metaDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaDescription_Read = {
  __typename?: 'HomeDocAccessFields_meta_metaDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaDescription_Update = {
  __typename?: 'HomeDocAccessFields_meta_metaDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaTitle = {
  __typename?: 'HomeDocAccessFields_meta_metaTitle';
  create: Maybe<HomeDocAccessFields_Meta_MetaTitle_Create>;
  delete: Maybe<HomeDocAccessFields_Meta_MetaTitle_Delete>;
  read: Maybe<HomeDocAccessFields_Meta_MetaTitle_Read>;
  update: Maybe<HomeDocAccessFields_Meta_MetaTitle_Update>;
};

export type HomeDocAccessFields_Meta_MetaTitle_Create = {
  __typename?: 'HomeDocAccessFields_meta_metaTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaTitle_Delete = {
  __typename?: 'HomeDocAccessFields_meta_metaTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaTitle_Read = {
  __typename?: 'HomeDocAccessFields_meta_metaTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Meta_MetaTitle_Update = {
  __typename?: 'HomeDocAccessFields_meta_metaTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt = {
  __typename?: 'HomeDocAccessFields_updatedAt';
  create: Maybe<HomeDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<HomeDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<HomeDocAccessFields_UpdatedAt_Read>;
  update: Maybe<HomeDocAccessFields_UpdatedAt_Update>;
};

export type HomeDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HomeDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HomeDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HomeDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields = {
  __typename?: 'HomeFields';
  createdAt: Maybe<HomeFields_CreatedAt>;
  meta: Maybe<HomeFields_Meta>;
  updatedAt: Maybe<HomeFields_UpdatedAt>;
};

export type HomeFields_CreatedAt = {
  __typename?: 'HomeFields_createdAt';
  create: Maybe<HomeFields_CreatedAt_Create>;
  delete: Maybe<HomeFields_CreatedAt_Delete>;
  read: Maybe<HomeFields_CreatedAt_Read>;
  update: Maybe<HomeFields_CreatedAt_Update>;
};

export type HomeFields_CreatedAt_Create = {
  __typename?: 'HomeFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Delete = {
  __typename?: 'HomeFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Read = {
  __typename?: 'HomeFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Update = {
  __typename?: 'HomeFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta = {
  __typename?: 'HomeFields_meta';
  create: Maybe<HomeFields_Meta_Create>;
  delete: Maybe<HomeFields_Meta_Delete>;
  fields: Maybe<HomeFields_Meta_Fields>;
  read: Maybe<HomeFields_Meta_Read>;
  update: Maybe<HomeFields_Meta_Update>;
};

export type HomeFields_Meta_Create = {
  __typename?: 'HomeFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_Delete = {
  __typename?: 'HomeFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_Fields = {
  __typename?: 'HomeFields_meta_Fields';
  metaDescription: Maybe<HomeFields_Meta_MetaDescription>;
  metaTitle: Maybe<HomeFields_Meta_MetaTitle>;
};

export type HomeFields_Meta_Read = {
  __typename?: 'HomeFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_Update = {
  __typename?: 'HomeFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaDescription = {
  __typename?: 'HomeFields_meta_metaDescription';
  create: Maybe<HomeFields_Meta_MetaDescription_Create>;
  delete: Maybe<HomeFields_Meta_MetaDescription_Delete>;
  read: Maybe<HomeFields_Meta_MetaDescription_Read>;
  update: Maybe<HomeFields_Meta_MetaDescription_Update>;
};

export type HomeFields_Meta_MetaDescription_Create = {
  __typename?: 'HomeFields_meta_metaDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaDescription_Delete = {
  __typename?: 'HomeFields_meta_metaDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaDescription_Read = {
  __typename?: 'HomeFields_meta_metaDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaDescription_Update = {
  __typename?: 'HomeFields_meta_metaDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaTitle = {
  __typename?: 'HomeFields_meta_metaTitle';
  create: Maybe<HomeFields_Meta_MetaTitle_Create>;
  delete: Maybe<HomeFields_Meta_MetaTitle_Delete>;
  read: Maybe<HomeFields_Meta_MetaTitle_Read>;
  update: Maybe<HomeFields_Meta_MetaTitle_Update>;
};

export type HomeFields_Meta_MetaTitle_Create = {
  __typename?: 'HomeFields_meta_metaTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaTitle_Delete = {
  __typename?: 'HomeFields_meta_metaTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaTitle_Read = {
  __typename?: 'HomeFields_meta_metaTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Meta_MetaTitle_Update = {
  __typename?: 'HomeFields_meta_metaTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt = {
  __typename?: 'HomeFields_updatedAt';
  create: Maybe<HomeFields_UpdatedAt_Create>;
  delete: Maybe<HomeFields_UpdatedAt_Delete>;
  read: Maybe<HomeFields_UpdatedAt_Read>;
  update: Maybe<HomeFields_UpdatedAt_Update>;
};

export type HomeFields_UpdatedAt_Create = {
  __typename?: 'HomeFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Delete = {
  __typename?: 'HomeFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Read = {
  __typename?: 'HomeFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Update = {
  __typename?: 'HomeFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeReadAccess = {
  __typename?: 'HomeReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeReadDocAccess = {
  __typename?: 'HomeReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateAccess = {
  __typename?: 'HomeUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateDocAccess = {
  __typename?: 'HomeUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Home_Meta = {
  __typename?: 'Home_Meta';
  metaDescription: Maybe<Scalars['String']['output']>;
  metaTitle: Maybe<Scalars['String']['output']>;
};

export type Image = {
  __typename?: 'Image';
  alt: Maybe<Scalars['String']['output']>;
  blockName: Maybe<Scalars['String']['output']>;
  blockType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  image: Media;
};

export type Media = {
  __typename?: 'Media';
  alt: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  filesize: Maybe<Scalars['Float']['output']>;
  focalX: Maybe<Scalars['Float']['output']>;
  focalY: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType: Maybe<Scalars['String']['output']>;
  thumbnailURL: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt: Maybe<MediaDocAccessFields_Alt>;
  createdAt: Maybe<MediaDocAccessFields_CreatedAt>;
  filename: Maybe<MediaDocAccessFields_Filename>;
  filesize: Maybe<MediaDocAccessFields_Filesize>;
  focalX: Maybe<MediaDocAccessFields_FocalX>;
  focalY: Maybe<MediaDocAccessFields_FocalY>;
  height: Maybe<MediaDocAccessFields_Height>;
  mimeType: Maybe<MediaDocAccessFields_MimeType>;
  thumbnailURL: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt: Maybe<MediaDocAccessFields_UpdatedAt>;
  url: Maybe<MediaDocAccessFields_Url>;
  width: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create: Maybe<MediaDocAccessFields_Alt_Create>;
  delete: Maybe<MediaDocAccessFields_Alt_Delete>;
  read: Maybe<MediaDocAccessFields_Alt_Read>;
  update: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create: Maybe<MediaDocAccessFields_Filename_Create>;
  delete: Maybe<MediaDocAccessFields_Filename_Delete>;
  read: Maybe<MediaDocAccessFields_Filename_Read>;
  update: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read: Maybe<MediaDocAccessFields_Filesize_Read>;
  update: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read: Maybe<MediaDocAccessFields_FocalX_Read>;
  update: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read: Maybe<MediaDocAccessFields_FocalY_Read>;
  update: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create: Maybe<MediaDocAccessFields_Height_Create>;
  delete: Maybe<MediaDocAccessFields_Height_Delete>;
  read: Maybe<MediaDocAccessFields_Height_Read>;
  update: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read: Maybe<MediaDocAccessFields_MimeType_Read>;
  update: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create: Maybe<MediaDocAccessFields_Url_Create>;
  delete: Maybe<MediaDocAccessFields_Url_Delete>;
  read: Maybe<MediaDocAccessFields_Url_Read>;
  update: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create: Maybe<MediaDocAccessFields_Width_Create>;
  delete: Maybe<MediaDocAccessFields_Width_Delete>;
  read: Maybe<MediaDocAccessFields_Width_Read>;
  update: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt: Maybe<MediaFields_Alt>;
  createdAt: Maybe<MediaFields_CreatedAt>;
  filename: Maybe<MediaFields_Filename>;
  filesize: Maybe<MediaFields_Filesize>;
  focalX: Maybe<MediaFields_FocalX>;
  focalY: Maybe<MediaFields_FocalY>;
  height: Maybe<MediaFields_Height>;
  mimeType: Maybe<MediaFields_MimeType>;
  thumbnailURL: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt: Maybe<MediaFields_UpdatedAt>;
  url: Maybe<MediaFields_Url>;
  width: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create: Maybe<MediaFields_Alt_Create>;
  delete: Maybe<MediaFields_Alt_Delete>;
  read: Maybe<MediaFields_Alt_Read>;
  update: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create: Maybe<MediaFields_CreatedAt_Create>;
  delete: Maybe<MediaFields_CreatedAt_Delete>;
  read: Maybe<MediaFields_CreatedAt_Read>;
  update: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create: Maybe<MediaFields_Filename_Create>;
  delete: Maybe<MediaFields_Filename_Delete>;
  read: Maybe<MediaFields_Filename_Read>;
  update: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create: Maybe<MediaFields_Filesize_Create>;
  delete: Maybe<MediaFields_Filesize_Delete>;
  read: Maybe<MediaFields_Filesize_Read>;
  update: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create: Maybe<MediaFields_FocalX_Create>;
  delete: Maybe<MediaFields_FocalX_Delete>;
  read: Maybe<MediaFields_FocalX_Read>;
  update: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create: Maybe<MediaFields_FocalY_Create>;
  delete: Maybe<MediaFields_FocalY_Delete>;
  read: Maybe<MediaFields_FocalY_Read>;
  update: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create: Maybe<MediaFields_Height_Create>;
  delete: Maybe<MediaFields_Height_Delete>;
  read: Maybe<MediaFields_Height_Read>;
  update: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create: Maybe<MediaFields_MimeType_Create>;
  delete: Maybe<MediaFields_MimeType_Delete>;
  read: Maybe<MediaFields_MimeType_Read>;
  update: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read: Maybe<MediaFields_ThumbnailUrl_Read>;
  update: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create: Maybe<MediaFields_UpdatedAt_Create>;
  delete: Maybe<MediaFields_UpdatedAt_Delete>;
  read: Maybe<MediaFields_UpdatedAt_Read>;
  update: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create: Maybe<MediaFields_Url_Create>;
  delete: Maybe<MediaFields_Url_Delete>;
  read: Maybe<MediaFields_Url_Read>;
  update: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create: Maybe<MediaFields_Width_Create>;
  delete: Maybe<MediaFields_Width_Delete>;
  read: Maybe<MediaFields_Width_Read>;
  update: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Alt_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals: InputMaybe<Scalars['Int']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  less_than: InputMaybe<Scalars['Int']['input']>;
  less_than_equal: InputMaybe<Scalars['Int']['input']>;
  not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_ThumbnailUrl_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  focalX: InputMaybe<Media_FocalX_Operator>;
  focalY: InputMaybe<Media_FocalY_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  focalX: InputMaybe<Media_FocalX_Operator>;
  focalY: InputMaybe<Media_FocalY_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  focalX: InputMaybe<Media_FocalX_Operator>;
  focalY: InputMaybe<Media_FocalY_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedia: Maybe<Media>;
  createPage: Maybe<Page>;
  createPayloadLockedDocument: Maybe<PayloadLockedDocument>;
  createPayloadPreference: Maybe<PayloadPreference>;
  createUser: Maybe<User>;
  deleteMedia: Maybe<Media>;
  deletePage: Maybe<Page>;
  deletePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  deletePayloadPreference: Maybe<PayloadPreference>;
  deleteUser: Maybe<User>;
  duplicateMedia: Maybe<Media>;
  duplicatePage: Maybe<Page>;
  duplicatePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference: Maybe<PayloadPreference>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser: Maybe<UsersLoginResult>;
  logoutUser: Maybe<Scalars['String']['output']>;
  refreshTokenUser: Maybe<UsersRefreshedUser>;
  resetPasswordUser: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateHome: Maybe<Home>;
  updateMedia: Maybe<Media>;
  updatePage: Maybe<Page>;
  updatePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  updatePayloadPreference: Maybe<PayloadPreference>;
  updateUser: Maybe<User>;
  verifyEmailUser: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePageArgs = {
  data: MutationPageInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password: InputMaybe<Scalars['String']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateHomeArgs = {
  data: MutationHomeInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePageArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  content: Maybe<Array<Page_Content>>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  meta: Maybe<Page_Meta>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type Page_Content = Image | Paragraph | ReadMore | TextWithFile | Title;

export type Page_Meta = {
  __typename?: 'Page_Meta';
  metaDescription: Maybe<Scalars['String']['output']>;
  metaTitle: Maybe<Scalars['String']['output']>;
};

export type Page_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Id_Operator = {
  equals: InputMaybe<Scalars['Int']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  less_than: InputMaybe<Scalars['Int']['input']>;
  less_than_equal: InputMaybe<Scalars['Int']['input']>;
  not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Page_Meta__MetaDescription_Operator = {
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__MetaTitle_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Slug_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt: InputMaybe<Page_CreatedAt_Operator>;
  id: InputMaybe<Page_Id_Operator>;
  meta__metaDescription: InputMaybe<Page_Meta__MetaDescription_Operator>;
  meta__metaTitle: InputMaybe<Page_Meta__MetaTitle_Operator>;
  slug: InputMaybe<Page_Slug_Operator>;
  updatedAt: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt: InputMaybe<Page_CreatedAt_Operator>;
  id: InputMaybe<Page_Id_Operator>;
  meta__metaDescription: InputMaybe<Page_Meta__MetaDescription_Operator>;
  meta__metaTitle: InputMaybe<Page_Meta__MetaTitle_Operator>;
  slug: InputMaybe<Page_Slug_Operator>;
  updatedAt: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt: InputMaybe<Page_CreatedAt_Operator>;
  id: InputMaybe<Page_Id_Operator>;
  meta__metaDescription: InputMaybe<Page_Meta__MetaDescription_Operator>;
  meta__metaTitle: InputMaybe<Page_Meta__MetaTitle_Operator>;
  slug: InputMaybe<Page_Slug_Operator>;
  updatedAt: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs: Array<Page>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  content: Maybe<PagesDocAccessFields_Content>;
  createdAt: Maybe<PagesDocAccessFields_CreatedAt>;
  meta: Maybe<PagesDocAccessFields_Meta>;
  slug: Maybe<PagesDocAccessFields_Slug>;
  updatedAt: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields_Content = {
  __typename?: 'PagesDocAccessFields_content';
  create: Maybe<PagesDocAccessFields_Content_Create>;
  delete: Maybe<PagesDocAccessFields_Content_Delete>;
  read: Maybe<PagesDocAccessFields_Content_Read>;
  update: Maybe<PagesDocAccessFields_Content_Update>;
};

export type PagesDocAccessFields_Content_Create = {
  __typename?: 'PagesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Delete = {
  __typename?: 'PagesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Read = {
  __typename?: 'PagesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Update = {
  __typename?: 'PagesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta = {
  __typename?: 'PagesDocAccessFields_meta';
  create: Maybe<PagesDocAccessFields_Meta_Create>;
  delete: Maybe<PagesDocAccessFields_Meta_Delete>;
  fields: Maybe<PagesDocAccessFields_Meta_Fields>;
  read: Maybe<PagesDocAccessFields_Meta_Read>;
  update: Maybe<PagesDocAccessFields_Meta_Update>;
};

export type PagesDocAccessFields_Meta_Create = {
  __typename?: 'PagesDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Delete = {
  __typename?: 'PagesDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Fields = {
  __typename?: 'PagesDocAccessFields_meta_Fields';
  metaDescription: Maybe<PagesDocAccessFields_Meta_MetaDescription>;
  metaTitle: Maybe<PagesDocAccessFields_Meta_MetaTitle>;
};

export type PagesDocAccessFields_Meta_Read = {
  __typename?: 'PagesDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Update = {
  __typename?: 'PagesDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaDescription = {
  __typename?: 'PagesDocAccessFields_meta_metaDescription';
  create: Maybe<PagesDocAccessFields_Meta_MetaDescription_Create>;
  delete: Maybe<PagesDocAccessFields_Meta_MetaDescription_Delete>;
  read: Maybe<PagesDocAccessFields_Meta_MetaDescription_Read>;
  update: Maybe<PagesDocAccessFields_Meta_MetaDescription_Update>;
};

export type PagesDocAccessFields_Meta_MetaDescription_Create = {
  __typename?: 'PagesDocAccessFields_meta_metaDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaDescription_Delete = {
  __typename?: 'PagesDocAccessFields_meta_metaDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaDescription_Read = {
  __typename?: 'PagesDocAccessFields_meta_metaDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaDescription_Update = {
  __typename?: 'PagesDocAccessFields_meta_metaDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaTitle = {
  __typename?: 'PagesDocAccessFields_meta_metaTitle';
  create: Maybe<PagesDocAccessFields_Meta_MetaTitle_Create>;
  delete: Maybe<PagesDocAccessFields_Meta_MetaTitle_Delete>;
  read: Maybe<PagesDocAccessFields_Meta_MetaTitle_Read>;
  update: Maybe<PagesDocAccessFields_Meta_MetaTitle_Update>;
};

export type PagesDocAccessFields_Meta_MetaTitle_Create = {
  __typename?: 'PagesDocAccessFields_meta_metaTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaTitle_Delete = {
  __typename?: 'PagesDocAccessFields_meta_metaTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaTitle_Read = {
  __typename?: 'PagesDocAccessFields_meta_metaTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_MetaTitle_Update = {
  __typename?: 'PagesDocAccessFields_meta_metaTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug';
  create: Maybe<PagesDocAccessFields_Slug_Create>;
  delete: Maybe<PagesDocAccessFields_Slug_Delete>;
  read: Maybe<PagesDocAccessFields_Slug_Read>;
  update: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  content: Maybe<PagesFields_Content>;
  createdAt: Maybe<PagesFields_CreatedAt>;
  meta: Maybe<PagesFields_Meta>;
  slug: Maybe<PagesFields_Slug>;
  updatedAt: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields_Content = {
  __typename?: 'PagesFields_content';
  create: Maybe<PagesFields_Content_Create>;
  delete: Maybe<PagesFields_Content_Delete>;
  read: Maybe<PagesFields_Content_Read>;
  update: Maybe<PagesFields_Content_Update>;
};

export type PagesFields_Content_Create = {
  __typename?: 'PagesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Delete = {
  __typename?: 'PagesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Read = {
  __typename?: 'PagesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Update = {
  __typename?: 'PagesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create: Maybe<PagesFields_CreatedAt_Create>;
  delete: Maybe<PagesFields_CreatedAt_Delete>;
  read: Maybe<PagesFields_CreatedAt_Read>;
  update: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta = {
  __typename?: 'PagesFields_meta';
  create: Maybe<PagesFields_Meta_Create>;
  delete: Maybe<PagesFields_Meta_Delete>;
  fields: Maybe<PagesFields_Meta_Fields>;
  read: Maybe<PagesFields_Meta_Read>;
  update: Maybe<PagesFields_Meta_Update>;
};

export type PagesFields_Meta_Create = {
  __typename?: 'PagesFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Delete = {
  __typename?: 'PagesFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Fields = {
  __typename?: 'PagesFields_meta_Fields';
  metaDescription: Maybe<PagesFields_Meta_MetaDescription>;
  metaTitle: Maybe<PagesFields_Meta_MetaTitle>;
};

export type PagesFields_Meta_Read = {
  __typename?: 'PagesFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Update = {
  __typename?: 'PagesFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaDescription = {
  __typename?: 'PagesFields_meta_metaDescription';
  create: Maybe<PagesFields_Meta_MetaDescription_Create>;
  delete: Maybe<PagesFields_Meta_MetaDescription_Delete>;
  read: Maybe<PagesFields_Meta_MetaDescription_Read>;
  update: Maybe<PagesFields_Meta_MetaDescription_Update>;
};

export type PagesFields_Meta_MetaDescription_Create = {
  __typename?: 'PagesFields_meta_metaDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaDescription_Delete = {
  __typename?: 'PagesFields_meta_metaDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaDescription_Read = {
  __typename?: 'PagesFields_meta_metaDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaDescription_Update = {
  __typename?: 'PagesFields_meta_metaDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaTitle = {
  __typename?: 'PagesFields_meta_metaTitle';
  create: Maybe<PagesFields_Meta_MetaTitle_Create>;
  delete: Maybe<PagesFields_Meta_MetaTitle_Delete>;
  read: Maybe<PagesFields_Meta_MetaTitle_Read>;
  update: Maybe<PagesFields_Meta_MetaTitle_Update>;
};

export type PagesFields_Meta_MetaTitle_Create = {
  __typename?: 'PagesFields_meta_metaTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaTitle_Delete = {
  __typename?: 'PagesFields_meta_metaTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaTitle_Read = {
  __typename?: 'PagesFields_meta_metaTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_MetaTitle_Update = {
  __typename?: 'PagesFields_meta_metaTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug';
  create: Maybe<PagesFields_Slug_Create>;
  delete: Maybe<PagesFields_Slug_Delete>;
  read: Maybe<PagesFields_Slug_Read>;
  update: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create: Maybe<PagesFields_UpdatedAt_Create>;
  delete: Maybe<PagesFields_UpdatedAt_Delete>;
  read: Maybe<PagesFields_UpdatedAt_Read>;
  update: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Paragraph = {
  __typename?: 'Paragraph';
  blockName: Maybe<Scalars['String']['output']>;
  blockType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  paragraph: Maybe<Scalars['String']['output']>;
  strong: Maybe<Scalars['Boolean']['output']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  document: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Media = 'media',
  Pages = 'pages',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Media | Page | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Media = 'media',
  Pages = 'pages',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Media = 'media',
  Pages = 'pages',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo: Maybe<PayloadLockedDocument_User_RelationTo>;
  value: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Media = 'media',
  Pages = 'pages',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals: InputMaybe<Scalars['Int']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  less_than: InputMaybe<Scalars['Int']['input']>;
  less_than_equal: InputMaybe<Scalars['Int']['input']>;
  not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo: Maybe<PayloadPreference_User_RelationTo>;
  value: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals: InputMaybe<Scalars['Int']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  less_than: InputMaybe<Scalars['Int']['input']>;
  less_than_equal: InputMaybe<Scalars['Int']['input']>;
  not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains: InputMaybe<Scalars['JSON']['input']>;
  equals: InputMaybe<Scalars['JSON']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  intersects: InputMaybe<Scalars['JSON']['input']>;
  like: InputMaybe<Scalars['JSON']['input']>;
  not_equals: InputMaybe<Scalars['JSON']['input']>;
  within: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user: Maybe<PayloadPreferencesDocAccessFields_User>;
  value: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt: Maybe<PayloadPreferencesFields_CreatedAt>;
  key: Maybe<PayloadPreferencesFields_Key>;
  updatedAt: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user: Maybe<PayloadPreferencesFields_User>;
  value: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create: Maybe<PayloadPreferencesFields_Key_Create>;
  delete: Maybe<PayloadPreferencesFields_Key_Delete>;
  read: Maybe<PayloadPreferencesFields_Key_Read>;
  update: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create: Maybe<PayloadPreferencesFields_User_Create>;
  delete: Maybe<PayloadPreferencesFields_User_Delete>;
  read: Maybe<PayloadPreferencesFields_User_Read>;
  update: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create: Maybe<PayloadPreferencesFields_Value_Create>;
  delete: Maybe<PayloadPreferencesFields_Value_Delete>;
  read: Maybe<PayloadPreferencesFields_Value_Read>;
  update: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access: Maybe<Access>;
  Home: Maybe<Home>;
  Media: Maybe<Media>;
  Page: Maybe<Page>;
  Pages: Maybe<Pages>;
  PayloadLockedDocument: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments: Maybe<PayloadLockedDocuments>;
  PayloadPreference: Maybe<PayloadPreference>;
  PayloadPreferences: Maybe<PayloadPreferences>;
  User: Maybe<User>;
  Users: Maybe<Users>;
  allMedia: Maybe<AllMedia>;
  countPages: Maybe<CountPages>;
  countPayloadLockedDocuments: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences: Maybe<CountPayloadPreferences>;
  countUsers: Maybe<CountUsers>;
  countallMedia: Maybe<CountallMedia>;
  docAccessHome: Maybe<HomeDocAccess>;
  docAccessMedia: Maybe<MediaDocAccess>;
  docAccessPage: Maybe<PagesDocAccess>;
  docAccessPayloadLockedDocument: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser: Maybe<UsersDocAccess>;
  initializedUser: Maybe<Scalars['Boolean']['output']>;
  meUser: Maybe<UsersMe>;
};


export type QueryHomeArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<Page_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  select: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<Media_Where>;
};


export type QueryCountPagesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<Page_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  trash: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type ReadMore = {
  __typename?: 'ReadMore';
  blockName: Maybe<Scalars['String']['output']>;
  blockType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};

export type TextWithFile = {
  __typename?: 'TextWithFile';
  blockName: Maybe<Scalars['String']['output']>;
  blockType: Maybe<Scalars['String']['output']>;
  file: Maybe<Media>;
  id: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
};

export type Title = {
  __typename?: 'Title';
  blockName: Maybe<Scalars['String']['output']>;
  blockType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil: Maybe<Scalars['DateTime']['output']>;
  loginAttempts: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken: Maybe<Scalars['String']['output']>;
  salt: Maybe<Scalars['String']['output']>;
  sessions: Maybe<Array<User_Sessions>>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  expiresAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type User_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains: InputMaybe<Scalars['EmailAddress']['input']>;
  equals: InputMaybe<Scalars['EmailAddress']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  equals: InputMaybe<Scalars['Int']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  less_than: InputMaybe<Scalars['Int']['input']>;
  less_than_equal: InputMaybe<Scalars['Int']['input']>;
  not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  id: InputMaybe<User_Id_Operator>;
  sessions__createdAt: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  id: InputMaybe<User_Id_Operator>;
  sessions__createdAt: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  id: InputMaybe<User_Id_Operator>;
  sessions__createdAt: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt: Maybe<UsersDocAccessFields_CreatedAt>;
  email: Maybe<UsersDocAccessFields_Email>;
  sessions: Maybe<UsersDocAccessFields_Sessions>;
  updatedAt: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create: Maybe<UsersDocAccessFields_Email_Create>;
  delete: Maybe<UsersDocAccessFields_Email_Delete>;
  read: Maybe<UsersDocAccessFields_Email_Read>;
  update: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read: Maybe<UsersDocAccessFields_Sessions_Read>;
  update: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt: Maybe<UsersFields_CreatedAt>;
  email: Maybe<UsersFields_Email>;
  sessions: Maybe<UsersFields_Sessions>;
  updatedAt: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create: Maybe<UsersFields_CreatedAt_Create>;
  delete: Maybe<UsersFields_CreatedAt_Delete>;
  read: Maybe<UsersFields_CreatedAt_Read>;
  update: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create: Maybe<UsersFields_Email_Create>;
  delete: Maybe<UsersFields_Email_Delete>;
  read: Maybe<UsersFields_Email_Read>;
  update: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create: Maybe<UsersFields_Sessions_Create>;
  delete: Maybe<UsersFields_Sessions_Delete>;
  fields: Maybe<UsersFields_Sessions_Fields>;
  read: Maybe<UsersFields_Sessions_Read>;
  update: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt: Maybe<UsersFields_Sessions_ExpiresAt>;
  id: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create: Maybe<UsersFields_Sessions_Id_Create>;
  delete: Maybe<UsersFields_Sessions_Id_Delete>;
  read: Maybe<UsersFields_Sessions_Id_Read>;
  update: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create: Maybe<UsersFields_UpdatedAt_Create>;
  delete: Maybe<UsersFields_UpdatedAt_Delete>;
  read: Maybe<UsersFields_UpdatedAt_Read>;
  update: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs: Maybe<Scalars['Int']['output']>;
};

export type HomeAccess = {
  __typename?: 'homeAccess';
  fields: Maybe<HomeFields>;
  read: Maybe<HomeReadAccess>;
  update: Maybe<HomeUpdateAccess>;
};

export type HomeDocAccess = {
  __typename?: 'homeDocAccess';
  fields: Maybe<HomeDocAccessFields>;
  read: Maybe<HomeReadDocAccess>;
  update: Maybe<HomeUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create: Maybe<MediaCreateAccess>;
  delete: Maybe<MediaDeleteAccess>;
  fields: Maybe<MediaFields>;
  read: Maybe<MediaReadAccess>;
  update: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create: Maybe<MediaCreateDocAccess>;
  delete: Maybe<MediaDeleteDocAccess>;
  fields: Maybe<MediaDocAccessFields>;
  read: Maybe<MediaReadDocAccess>;
  update: Maybe<MediaUpdateDocAccess>;
};

export type MutationHomeInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  meta: InputMaybe<MutationHome_MetaInput>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationHome_MetaInput = {
  metaDescription: InputMaybe<Scalars['String']['input']>;
  metaTitle: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  focalX: InputMaybe<Scalars['Float']['input']>;
  focalY: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  thumbnailURL: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  focalX: InputMaybe<Scalars['Float']['input']>;
  focalY: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  thumbnailURL: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  content: InputMaybe<Scalars['JSON']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  meta: InputMaybe<MutationPage_MetaInput>;
  slug: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  content: InputMaybe<Scalars['JSON']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  meta: InputMaybe<MutationPageUpdate_MetaInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_MetaInput = {
  metaDescription: InputMaybe<Scalars['String']['input']>;
  metaTitle: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_MetaInput = {
  metaDescription: InputMaybe<Scalars['String']['input']>;
  metaTitle: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  document: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  document: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  key: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  key: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash: InputMaybe<Scalars['String']['input']>;
  lockUntil: InputMaybe<Scalars['String']['input']>;
  loginAttempts: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  salt: InputMaybe<Scalars['String']['input']>;
  sessions: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  lockUntil: InputMaybe<Scalars['String']['input']>;
  loginAttempts: InputMaybe<Scalars['Float']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  salt: InputMaybe<Scalars['String']['input']>;
  sessions: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_SessionsInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create: Maybe<PagesCreateAccess>;
  delete: Maybe<PagesDeleteAccess>;
  fields: Maybe<PagesFields>;
  read: Maybe<PagesReadAccess>;
  update: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create: Maybe<PagesCreateDocAccess>;
  delete: Maybe<PagesDeleteDocAccess>;
  fields: Maybe<PagesDocAccessFields>;
  read: Maybe<PagesReadDocAccess>;
  update: Maybe<PagesUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields: Maybe<PayloadLockedDocumentsFields>;
  read: Maybe<PayloadLockedDocumentsReadAccess>;
  update: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create: Maybe<PayloadPreferencesCreateAccess>;
  delete: Maybe<PayloadPreferencesDeleteAccess>;
  fields: Maybe<PayloadPreferencesFields>;
  read: Maybe<PayloadPreferencesReadAccess>;
  update: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create: Maybe<PayloadPreferencesCreateDocAccess>;
  delete: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields: Maybe<PayloadPreferencesDocAccessFields>;
  read: Maybe<PayloadPreferencesReadDocAccess>;
  update: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create: Maybe<UsersCreateAccess>;
  delete: Maybe<UsersDeleteAccess>;
  fields: Maybe<UsersFields>;
  read: Maybe<UsersReadAccess>;
  unlock: Maybe<UsersUnlockAccess>;
  update: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create: Maybe<UsersCreateDocAccess>;
  delete: Maybe<UsersDeleteDocAccess>;
  fields: Maybe<UsersDocAccessFields>;
  read: Maybe<UsersReadDocAccess>;
  unlock: Maybe<UsersUnlockDocAccess>;
  update: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp: Maybe<Scalars['Int']['output']>;
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection: Maybe<Scalars['String']['output']>;
  exp: Maybe<Scalars['Int']['output']>;
  strategy: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp: Maybe<Scalars['Int']['output']>;
  refreshedToken: Maybe<Scalars['String']['output']>;
  strategy: Maybe<Scalars['String']['output']>;
  user: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', Home: { __typename?: 'Home', meta: { __typename?: 'Home_Meta', metaTitle: string | null, metaDescription: string | null } | null } | null };

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPageBySlugQuery = { __typename?: 'Query', Pages: { __typename?: 'Pages', docs: Array<{ __typename?: 'Page', id: number, slug: string, meta: { __typename?: 'Page_Meta', metaTitle: string | null, metaDescription: string | null } | null, content: Array<{ __typename: 'Image', alt: string | null, image: { __typename?: 'Media', id: number, filename: string | null, url: string | null } } | { __typename: 'Paragraph', paragraph: string | null, strong: boolean | null } | { __typename: 'ReadMore', label: string | null } | { __typename: 'TextWithFile', text: string | null, file: { __typename?: 'Media', id: number, filename: string | null, url: string | null } | null } | { __typename: 'Title', title: string }> | null }> } | null };


export const GetHomeDocument = gql`
    query GetHome {
  Home {
    meta {
      metaTitle
      metaDescription
    }
  }
}
    `;
export const GetPageBySlugDocument = gql`
    query GetPageBySlug($slug: String!) {
  Pages(where: {slug: {equals: $slug}}) {
    docs {
      id
      slug
      meta {
        metaTitle
        metaDescription
      }
      content {
        __typename
        ... on Title {
          title
        }
        ... on Paragraph {
          paragraph
          strong
        }
        ... on ReadMore {
          label
        }
        ... on TextWithFile {
          text
          file {
            id
            filename
            url
          }
        }
        ... on Image {
          image {
            id
            filename
            url
          }
          alt
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetHome(variables?: GetHomeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetHomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeQuery>({ document: GetHomeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHome', 'query', variables);
    },
    GetPageBySlug(variables: GetPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageBySlugQuery>({ document: GetPageBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPageBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;