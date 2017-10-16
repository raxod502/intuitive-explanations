#!/usr/bin/env zsh

cd $0:A:h:h

setopt err_return
setopt pipefail

if [[ -z $NETLIFY_KEY ]]; then
    echo "Deploy token not set. Please export \$NETLIFY_KEY."
    exit 1
fi

function deploy {
    curl -H "Content-Type: application/zip" \
         -H "Authorization: Bearer $NETLIFY_KEY" \
         --data-binary @public.zip \
         https://api.netlify.com/api/v1/sites/intuitive-explanations.netlify.com/deploys
}

echo "Deploying Intuitive Explanations to Netlify!"

if (( $+commands[jq] )); then
    deploy | jq
else
    deploy
fi

echo "Finished deploy! Check it out: https://intuitive-explanations.netlify.com"
