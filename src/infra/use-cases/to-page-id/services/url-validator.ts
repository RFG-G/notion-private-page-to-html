import { Validation } from '../../../protocols/validation';
import { InvalidPageUrlError } from '../../../errors';

export class UrlValidator implements Validation<[string]> {
  validate(url: string): Error | null {
    if (!this.isNotionPargeUrl(url)) return new InvalidPageUrlError(url);
    return null;
  }

  private isNotionPargeUrl(pageId: string): boolean {
    return !!pageId 
  }
}
