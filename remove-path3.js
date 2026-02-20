const fs = require('fs');
try {
  const path = 'app/assets/de-logo.svg';
  let s = fs.readFileSync(path, 'utf8');
  const before = s.length;
  const re = /<path id="path3" [^>]*><\/path>/;
  if (!re.test(s)) {
    console.log('path3 not found with simple regex, trying alternate');
  }
  s = s.replace(/<path id="path3" [^>]*><\/path>/, '');
  fs.writeFileSync(path, s);
  console.log('Done. length before:', before, 'after:', s.length, 'path3 still there:', s.includes('path3'));
} catch (e) {
  console.error(e);
  process.exit(1);
}
