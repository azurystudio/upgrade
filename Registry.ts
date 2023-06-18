export class Registry {
  public name;
  public prefix;
  /** parse package name from url (used by createUpdates()) */
  public getName;
  /** parse current version from url (used by createUpdates()) */
  public getCurrentVersion;
  /** parse next version from url (used by createUpdates()) */
  public getNextVersion;
  /** create current version url (used by createMarkdown()) */
  public getCurrentVersionUrl;
  /** create next version url (used by createMarkdown()) */
  public getNextVersionUrl;
  /** get github repository (used by createMarkdown()) */
  public getRepository;
  /** get all the versions for this module */
  public getVersions;
  constructor(opts: {
    name: string;
    prefix?: string;
    getName: (url: string) => string;
    getCurrentVersion: (url: string) => Promise<string> | string;
    getVersions(name: string, url: string): Promise<string[]>;
    getNextVersion: (name: string, url: string) => Promise<string>;
    getCurrentVersionUrl: (
      name: string,
      version: string,
      url: string,
    ) => string;
    getNextVersionUrl: (name: string, version: string, url: string) => string;
    getRepository: (
      name: string,
      url: string,
    ) => Promise<string | undefined> | string | undefined;
  }) {
    this.name = opts.name;
    this.prefix = opts.prefix ?? opts.name;
    this.getName = opts.getName;
    this.getCurrentVersion = opts.getCurrentVersion;
    this.getNextVersion = opts.getNextVersion;
    this.getCurrentVersionUrl = opts.getCurrentVersionUrl;
    this.getNextVersionUrl = opts.getNextVersionUrl;
    this.getRepository = opts.getRepository;
    this.getVersions = opts.getVersions;
  }
}
