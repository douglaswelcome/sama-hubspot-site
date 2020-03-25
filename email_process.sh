for f in _src/markup/email_modules/components/*.mjml; do
  file="${f##*/}"
  file="${file%.*}"
  if [ -d "_codeDist/markup/email/email_modules/$file.module" ]; then
    echo "$file module already exists"
  else
   npx hs create module $file _codeDist/markup/email/email_modules
    echo "$file module created"
  fi
  npx mjml _src/markup/email_modules/components/$file.mjml -o _codeDist/markup/email/email_modules/$file.module/module.html
  sed -n '/<!-- begin module -->/,/<!-- end module -->/ p ' _codeDist/markup/email/email_modules/$file.module/module.html > _codeDist/markup/email/email_modules/$file.module/temp.html
  mv _codeDist/markup/email/email_modules/$file.module/temp.html _codeDist/markup/email/email_modules/$file.module/module.html
  echo "$file module markup converted"
done

for x in _src/markup/email_modules/static/*.mjml; do
  static="${x##*/}"
  static="${static%.*}"
  npx mjml _src/markup/email_modules/static/$static.mjml -o _codeDist/markup/email/email_static/$static.html
  if grep -q '<!-- begin module -->' _codeDist/markup/email/email_static/$static.html; then
   sed -n '/<!-- begin module -->/,/<!-- end module -->/ p ' _codeDist/markup/email/email_static/$static.html > _codeDist/markup/email/email_static/$static-temp.html
   mv _codeDist/markup/email/email_static/$static-temp.html _codeDist/markup/email/email_static/$static.html
   echo "$static block created"
  else
    echo "$static block created"
  fi
  
done

# npx mjml _src/markup/email_modules/static/divider.mjml -o _codeDist/markup/email/email_static/divider.html


# npx hs create module article-heading1 _codeDist/markup/email/email_modules
