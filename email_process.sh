# for f in _src/markup/email_modules/components/*.mjml; do
#   file="${f##*/}"
#   file="${file%.*}"
#   npx hs create module $file _codeDist/markup/email/email_modules
#   npx mjml _src/markup/email_modules/components/$file.mjml -o _codeDist/markup/email/email_modules/$file.module/module.html
#   echo "gotcha"
# done

# for x in _src/markup/email_modules/static/*.mjml; do
#   static="${x##*/}"
#   static="${static%.*}"
#   npx mjml _src/markup/email_modules/static/$static.mjml -o _codeDist/markup/email/email_static/$static.html
#   echo "blam"
# done

# npx mjml _src/markup/email_modules/static/divider.mjml -o _codeDist/markup/email/email_static/divider.html


# npx hs create module article-heading1 _codeDist/markup/email/email_modules
  npx mjml _src/markup/email_modules/components/image.mjml -o _codeDist/markup/email/email_modules/image.module/module.html