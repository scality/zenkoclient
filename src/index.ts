export * from '@aws-sdk/client-s3';

import {
    ListObjectsV2Command,
    ListObjectsV2CommandInput,
    ListObjectVersionsCommand,
    ListObjectVersionsCommandInput
} from '@aws-sdk/client-s3';
import { HttpRequest } from '@aws-sdk/protocol-http';

export * from '@aws-sdk/credential-providers';
export * from '@aws-sdk/s3-presigned-post';
export * from '@aws-sdk/s3-request-presigner';

export type {
    AwsCredentialIdentity, HttpRequest,
    HttpResponse,
    Pluggable, Provider, RequestHandler,
    SerdeContext
} from '@aws-sdk/types';

export { HttpRequest as ProtocolHttpRequestClass } from '@aws-sdk/protocol-http';
export type { HttpRequest as ProtocolHttpRequest } from '@aws-sdk/protocol-http';


export interface SearchObjectsV2CommandInput extends ListObjectsV2CommandInput {
  Search?: string;
}

export class SearchObjectsV2Command extends ListObjectsV2Command {
  constructor(input: SearchObjectsV2CommandInput) {
    super(input);
    // @ts-ignore
    const originalSerialize = this.serialize;
    // @ts-ignore
    this.serialize = async function(input: SearchObjectsV2CommandInput, context: any): Promise<HttpRequest> {
      const cc = await originalSerialize(input, context);
      if (input.Search) {
        cc.query = {
          ...cc.query,
          search: input.Search,
        };
      }
      return cc;
    }
  }
}

export interface SearchObjectsVersionCommandInput extends ListObjectVersionsCommandInput {
    Search?: string;
}

export class SearchObjectsVersionCommand extends ListObjectVersionsCommand {
    constructor(input: SearchObjectsVersionCommandInput) {
        super(input);
        // @ts-ignore
        const originalSerialize = this.serialize;
        // @ts-ignore
        this.serialize = async function(input: SearchObjectsVersionCommandInput, context: any): Promise<HttpRequest> {
            const cc = await originalSerialize(input, context);
            if (input.Search) {
                cc.query = {
                    ...cc.query,
                    search: input.Search,
                };
            }
            return cc;
        }
    }
}
