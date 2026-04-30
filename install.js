#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const REPO_URL = 'https://github.com/nishantpurohit04/axiomweb.git';
const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.hermes', 'skills');
const GLOBAL_TARGET_DIR = path.join(GLOBAL_SKILLS_DIR, 'axiomweb');
const LOCAL_TARGET_DIR = path.join(process.cwd(), '.axiomweb');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

async function showMenu() {
    console.clear();
    console.log(`${colors.bright}${colors.cyan}==================================================${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}             AXIOMWEB UNIVERSAL DEPLOYER           ${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}==================================================${colors.reset}`);
    console.log(`\n${colors.bright}Please select an installation mode:${colors.reset}`);
    console.log(`\n  ${colors.green}[1]${colors.reset} ${colors.bright}Global Install${colors.reset} (For Hermes Agent)`);
    console.log(`  ${colors.green}[2]${colors.reset} ${colors.bright}Local Install${colors.reset} (For Cursor, Claude Code, OpenCode)`);
    console.log(`  ${colors.green}[3]${colors.reset} ${colors.bright}Update AxiomWeb${colors.reset} (Sync latest standards)`);
    console.log(`  ${colors.green}[4]${colors.reset} ${colors.bright}Exit${colors.reset}`);
    console.log(`\n${colors.bright}${colors.cyan}--------------------------------------------------${colors.reset}`);

    rl.question('\nSelection: ', async (choice) => {
        switch (choice) {
            case '1': await installGlobal(); break;
            case '2': await installLocal(); break;
            case '3': await update(); break;
            case '4': process.exit(0);
            default: 
                console.log(`${colors.red}Invalid choice. Please try again.${colors.reset}`);
                setTimeout(showMenu, 1500);
        }
    });
}

async function installGlobal() {
    console.log(`\n${colors.blue}🌐 Deploying to Global Hermes Path...${colors.reset}`);
    try {
        if (!fs.existsSync(GLOBAL_SKILLS_DIR)) {
            fs.mkdirSync(GLOBAL_SKILLS_DIR, { recursive: true });
        }
        if (fs.existsSync(GLOBAL_TARGET_DIR)) {
            await update();
        } else {
            execSync(`git clone ${REPO_URL} ${GLOBAL_TARGET_DIR}`, { stdio: 'inherit' });
            console.log(`\n${colors.green}✅ AxiomWeb Global Skill active!${colors.reset}`);
        }
        finish();
    } catch (e) { handleError(e); }
}

async function installLocal() {
    console.log(`\n${colors.blue}📦 Deploying to Local Project Root...${colors.reset}`);
    try {
        if (fs.existsSync(LOCAL_TARGET_DIR)) {
            await update();
        } else {
            execSync(`git clone ${REPO_URL} ${LOCAL_TARGET_DIR}`, { stdio: 'inherit' });
        }
        
        await adaptAgentConfigs();
        
        console.log(`\n${colors.green}✅ AxiomWeb Local Standard deployed!${colors.reset}`);
        finish();
    } catch (e) { handleError(e); }
}

async function update() {
    console.log(`\n${colors.yellow}🔄 Syncing latest AxiomWeb standards...${colors.reset}`);
    try {
        const target = fs.existsSync(LOCAL_TARGET_DIR) ? LOCAL_TARGET_DIR : GLOBAL_TARGET_DIR;
        if (!fs.existsSync(target)) throw new Error("No existing installation found to update.");
        execSync(`git -C ${target} pull`, { stdio: 'inherit' });
        console.log(`\n${colors.green}✅ AxiomWeb is now up to date!${colors.reset}`);
        finish();
    } catch (e) { handleError(e); }
}

async function adaptAgentConfigs() {
    const configFiles = ['.cursorrules', '.clauderules', '.windsurfrules'];
    const adapterText = '\n\n# AxiomWeb Standard\nFollow the AxiomWeb Standard located in ./.axiomweb/SKILL.md for all high-fidelity cinematic web development.\n';
    let adapted = false;

    for (const file of configFiles) {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (!content.includes('AxiomWeb')) {
                fs.appendFileSync(filePath, adapterText);
                console.log(`${colors.magenta}⚙️  Auto-adapted config: ${file}${colors.reset}`);
                adapted = true;
            }
        }
    }
    if (!adapted) {
        console.log(`\n${colors.yellow}💡 No config files found. Manual step: Add "Follow AxiomWeb in ./.axiomweb/SKILL.md" to your agent rules.${colors.reset}`);
    }
}

function finish() {
    console.log(`\n${colors.bright}${colors.cyan}--------------------------------------------------${colors.reset}`);
    console.log(`${colors.bright}AxiomWeb is now ACTIVE.${colors.reset}`);
    console.log(`Command: ${colors.green}"Initialize AxiomWeb Phase 0 for my project"${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}--------------------------------------------------${colors.reset}`);
    process.exit(0);
}

function handleError(e) {
    console.error(`\n${colors.red}❌ Error: ${e.message}${colors.reset}`);
    rl.close();
    process.exit(1);
}

showMenu();
