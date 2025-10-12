# EDI Plugin Landing Page

Landing page for the EDI Plugin - Обмен данными между WooCommerce и 1С.

## Project Structure

- `src/` - Source files
  - `blocks/` - Modular blocks with templates and data together
    - `header/` - Hero section (header.njk + header.js)
    - `features/` - Features section (features.njk + features.js)
    - `testimonials/` - Testimonials section (testimonials.njk + testimonials.js)
    - `pricing/` - Pricing section (pricing.njk + pricing.js)
    - `faq/` - FAQ section (faq.njk + faq.js)
    - `cta/` - Call to action section (cta.njk + cta.js)
    - `footer/` - Footer section (footer.njk + footer.js)
  - `_data/` - Global data files that import block data
  - `_layouts/` - Page layouts
  - `css/` - Custom CSS styles
  - `images/` - Image assets
  - `index.njk` - Main landing page
  - `404.njk` - 404 error page
- `_site/` - Generated static site
- `.eleventy.js` - Eleventy configuration
- `package.json` - Project dependencies

## Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Content Management

All content is stored together with its template in the `src/blocks/` directory. Each block has:
- A `.njk` file containing the HTML template
- A `.js` file containing the data for that block

To modify content, simply edit the corresponding `.js` file in the block's directory.
To modify the layout, edit the corresponding `.njk` file.

## How It Works

1. Each block has its template (`.njk`) and data (`.js`) stored together in its own directory
2. The `_data/blocks.js` file imports all block data and makes it available globally
3. Templates access their data through the `blocks` global object (e.g., `blocks.header`, `blocks.features`)
4. The main page `src/index.njk` includes all blocks to create the complete landing page

This structure makes it easy to find and manage both the template and data for each block while ensuring the data is properly rendered.