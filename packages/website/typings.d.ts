declare module '';

declare module 'github-directory-downloader' {
  export default function (
    source: string,
    saveTo: string
  ): Promise<{
    files: Record<string, string>;
    downloaded: number;
    success: boolean;
    error?: unknown;
  }>;
}
