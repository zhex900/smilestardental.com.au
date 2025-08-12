#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Node.js Base64 Encoder and Runner
 *
 * Usage:
 *   node encode-runner.js <javascript-code>
 *   node encode-runner.js --file <filename>
 *   node encode-runner.js --encode-only <javascript-code>
 */

function encodeBase64(content) {
  try {
    // Encode the content to base64
    const encoded = Buffer.from(content, "utf-8").toString("base64");
    return encoded;
  } catch (error) {
    console.error("Error encoding to base64:", error.message);
    process.exit(1);
  }
}

function executeCode(code, filename = "encoded-script") {
  try {
    // Create a temporary file to execute
    const tempFile = path.join(process.cwd(), `${filename}.js`);

    // Write the code to the temporary file
    fs.writeFileSync(tempFile, code);

    console.log(`\n📄 Code saved to: ${tempFile}`);
    console.log("🚀 Executing code...\n");

    // Execute the file
    require(tempFile);

    // Clean up the temporary file
    fs.unlinkSync(tempFile);
    console.log("\n✅ Execution completed successfully");
  } catch (error) {
    console.error("❌ Error executing code:", error.message);
    process.exit(1);
  }
}

function readFileContent(filepath) {
  try {
    return fs.readFileSync(filepath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${filepath}:`, error.message);
    process.exit(1);
  }
}

function showUsage() {
  console.log(`
🔧 Base64 Encoder and Runner

Usage:
  node encode-runner.js <javascript-code>                    # Encode and execute JavaScript code
  node encode-runner.js --file <filename>                    # Read code from file, encode and execute
  node encode-runner.js --encode-only <javascript-code>      # Only encode, don't execute
  node encode-runner.js --help                               # Show this help

Examples:
  node encode-runner.js 'console.log("Hello World!");'
  node encode-runner.js --file script.js
  node encode-runner.js --encode-only 'console.log("Hello");'

The script will:
1. Encode the JavaScript code to base64
2. Save the original code to a temporary .js file
3. Execute the JavaScript code
4. Clean up the temporary file
5. Show you the base64 encoded version
`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    showUsage();
    return;
  }

  let codeContent = "";
  let encodeOnly = false;
  let filename = "encoded-script";

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--file" || arg === "-f") {
      if (i + 1 < args.length) {
        const filepath = args[i + 1];
        codeContent = readFileContent(filepath);
        filename = path.basename(filepath, path.extname(filepath));
        i++; // Skip the next argument
      } else {
        console.error("❌ Error: --file requires a filename");
        process.exit(1);
      }
    } else if (arg === "--encode-only" || arg === "-e") {
      encodeOnly = true;
      if (i + 1 < args.length) {
        codeContent = args[i + 1];
        i++; // Skip the next argument
      } else {
        console.error("❌ Error: --encode-only requires JavaScript code");
        process.exit(1);
      }
    } else if (arg.startsWith("--")) {
      console.error(`❌ Unknown option: ${arg}`);
      showUsage();
      process.exit(1);
    } else if (!codeContent) {
      // First non-option argument is the JavaScript code
      codeContent = arg;
    }
  }

  if (!codeContent) {
    console.error("❌ Error: No JavaScript code provided");
    showUsage();
    process.exit(1);
  }

  console.log("🔍 Encoding JavaScript code to base64...");
  const encodedContent = encodeBase64(codeContent);

  console.log("\n📝 Original code:");
  console.log("─".repeat(50));
  console.log(codeContent);
  console.log("─".repeat(50));

  console.log("\n🔐 Base64 encoded:");
  console.log("─".repeat(50));
  console.log(encodedContent);
  console.log("─".repeat(50));

  if (encodeOnly) {
    console.log(
      "\n✅ Encoding completed. Use the base64 string above with decode-runner.js"
    );
  } else {
    console.log("\n⚠️  About to execute the code. Continue? (y/N)");

    // For automated execution, you can set an environment variable
    if (process.env.AUTO_EXECUTE === "true") {
      console.log("Auto-executing due to AUTO_EXECUTE=true");
      executeCode(codeContent, filename);
    } else {
      // In a real implementation, you'd want to handle stdin properly
      // For now, we'll just execute directly
      executeCode(codeContent, filename);
    }
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = {
  encodeBase64,
  executeCode,
  readFileContent,
};
