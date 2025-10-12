module.exports = function (eleventyConfig) {
    // Copy custom CSS
    eleventyConfig.addPassthroughCopy("src/css");

    // Copy images
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addGlobalData("ldJson", require('./src/ld-json/ld-json.js'));

    // Add global data from block files dynamically
    const fs = require('fs');
    const path = require('path');

    const blocksDir = path.join(__dirname, 'src/blocks');
    if (fs.existsSync(blocksDir)) {
        const blockFolders = fs.readdirSync(blocksDir, {withFileTypes: true})
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        blockFolders.forEach(blockName => {
            const jsFile = path.join(blocksDir, blockName, `${blockName}.js`);
            if (fs.existsSync(jsFile)) {
                const camelCaseBlockName = blockName.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
                eleventyConfig.addGlobalData(camelCaseBlockName, require(jsFile));
            }
        });
    }

    // Исключаем директорию ld-json из обработки
    eleventyConfig.ignores.add("src/ld-json/**");

    // Configure input and output directories
    return {
        dir: {
            input: "src",
            output: "site",
            includes: "blocks",
            layouts: "layouts"
        }
    };
};