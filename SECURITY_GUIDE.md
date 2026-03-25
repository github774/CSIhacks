# CSIhacks Security Guide

This guide outlines the steps YOU must take to resolve the "malicious site" warning from Google after the security hardening changes are deployed.

## Step 1: Verify Ownership in Google Search Console
1.  Go to the [Google Search Console](https://search.google.com/search-console/welcome).
2.  Add your property: `https://csihacks.com`.
3.  Follow the verification steps (Vercel automatic verification or DNS record).

## Step 2: Check for Security Issues
1.  In the left sidebar, go to **Security & Manual Actions** > **Security Issues**.
2.  Review the specific URLs or reasons Google has flagged.
3.  If no issues are found, the site may have been flagged for general non-compliance or past issues.

## Step 3: Request a Review
1.  Once the new `vercel.json` (with security headers) is deployed, go back to the **Security Issues** report.
2.  Click **Request Review**.
3.  In the explanation box, provide the following (or similar):
    > "I have conducted a thorough security audit of the site. No malicious scripts or files were found. I have implemented a strict Content Security Policy (CSP), added security headers (X-Frame-Options, STS, etc.), and ensured all dependencies are up to date. I am requesting a review to remove the 'malicious site' warning."

## Step 4: Monitor and Maintain
- Ensure you have regular backups (automated by Vercel/GitHub).
- Avoid using third-party scripts from untrusted CDNs.
- Keep your SSL/TLS certificate active (handled by Vercel).

> [!TIP]
> After your site is cleared, you can verify your security implementation at [securityheaders.com](https://securityheaders.com). Aim for an 'A' or 'A+' rating.
