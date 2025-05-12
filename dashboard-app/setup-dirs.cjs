const fs = require('fs');

const directories = [
  'src/assets',
  'src/components/ui',
  'src/components/features',
  'src/components/layout',
  'src/hooks',
  'src/context',
  'src/store/slices',
  'src/services',
  'src/utils',
  'src/pages',
  'src/types',
  'src/tests'
];

directories.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created ${dir}`);
});