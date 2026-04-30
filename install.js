#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const REPO_URL = 'https://github.com/nishant/axiomweb.git';
const GLOBAL_TARGET_DIR = path.join(os.homedir(), '.axiomweb');

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    red: "\x1b[31m",
};

async function install() {
    console.clear();
    console.log(`${colors.bright}${colors.cyan}==================================================${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}             AXIOMWEB GLOBAL DEPLOYER              ${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}==================================================${colors.reset}`);
    
    console.log(`\n${colors.blue}🚀 Deploying AxiomWeb Standard to global storage...${colors.reset}`);

    try {
        if (fs.existsSync(GLOBAL_TARGET_DIR)) {
            console.log(`${colors.yellow}🔄 AxiomWeb already exists. Syncing latest standards...${colors.reset}`);
            execSync(`git -C ${GLOBAL_TARGET_DIR} pull`, { stdio: 'inherit' });
        } else {
            console.log(`${colors.blue}📥 Downloading AxiomWeb from GitHub...${colors.reset}`);
            execSync(`git clone ${REPO_URL} ${GLOBAL_TARGET_DIR}`, { stdio: 'inherit' });
        }

        console.log(`\n${colors.green}✅ Installation Complete!${colors.reset}`);
        console.log(`\n${colors.bright}Now, copy and paste the following prompt into your AI Agent${colors.reset} (Hermes, Claude Code, Cursor, etc.):`);
        
        const activationPrompt = `
----------------------------------------------------------------------------------------------------
AxiomWeb is installed at ${GLOBAL_TARGET_DIR}. 
1. Locate this directory and integrate it into your skills/knowledge base (move or symlink it to your preferred skill directory if applicable).
2. Read the SKILL.md file to adopt the AxiomWeb "Billion Dollar Standard" for high-fidelity cinematic web development.
3. Enhance my current project's system prompt and architectural approach to strictly adhere to these protocols.
----------------------------------------------------------------------------------------------------
        `;
        
        console.log(`\n${colors.magenta}${colors.bright}${activationPrompt}${colors.reset}`);
        
        console.log(`\n${colors.cyan}Standard deployed to: ${GLOBAL_TARGET_DIR}${colors.reset}`);
        console.log(`${colors.bright}${colors.cyan}==================================================${colors.reset}`);
        process.exit(0);

    } catch (error) {
        console.error(`\n${colors.red}❌ Error during deployment: ${error.message}${colors.reset}`);
        process.exit(1);
    }
}

install();
