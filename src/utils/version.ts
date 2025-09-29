/*
Wattson - A Discord EE bot by Not_H3
Copyright (C) 2025  Not_H3

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

interface VersionInfo {
    version: string;
    commitId: string;
    shortCommit: string;
}

let cachedVersionInfo: VersionInfo | null = null;

export function getVersionInfo(): VersionInfo {
    if (cachedVersionInfo) {
        return cachedVersionInfo;
    }

    let version = 'unknown';
    let commitId = 'unknown';
    let shortCommit = 'unknown';

    try {
        // Get version from package.json
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            version = packageJson.version || 'unknown';
        }
    } catch (error) {
        console.warn('Could not read package.json version:', error);
    }

    try {
        // Get commit ID from git
        commitId = execSync('git rev-parse HEAD', { 
            encoding: 'utf8', 
            cwd: process.cwd(),
            stdio: ['ignore', 'pipe', 'ignore']
        }).trim();
        
        shortCommit = commitId.substring(0, 7);
    } catch (error) {
        // Fallback: try to read from .git/HEAD if git command fails
        try {
            const gitHeadPath = path.join(process.cwd(), '.git', 'HEAD');
            if (fs.existsSync(gitHeadPath)) {
                const headContent = fs.readFileSync(gitHeadPath, 'utf8').trim();
                
                if (headContent.startsWith('ref: ')) {
                    // It's a reference to a branch
                    const refPath = path.join(process.cwd(), '.git', headContent.substring(5));
                    if (fs.existsSync(refPath)) {
                        commitId = fs.readFileSync(refPath, 'utf8').trim();
                        shortCommit = commitId.substring(0, 7);
                    }
                } else {
                    // It's a direct commit hash
                    commitId = headContent;
                    shortCommit = commitId.substring(0, 7);
                }
            }
        } catch (gitError) {
            console.warn('Could not read git commit information:', gitError);
        }
    }

    cachedVersionInfo = { version, commitId, shortCommit };
    return cachedVersionInfo;
}

export function getVersionString(): string {
    const info = getVersionInfo();
    return `v${info.version} (${info.shortCommit})`;
}

export function getFooterText(): string {
    const info = getVersionInfo();
    return `Wattson v${info.version} • commit: ${info.shortCommit}`;
}