TIMESTAMP=$1
VERSION=$2
BRANCH=$3
COMMIT_ID=$4
echo "$TIMESTAMP $VERSION $BRANCH $COMMIT_ID"

curl_command="curl --silent --output release.json --write-out '%{http_code}' \
  --data '{
    \"tag_name\": \"release-$TIMESTAMP\",
    \"target_commitish\": \"$BRANCH\",
    \"name\": \"Version $VERSION\",
    \"body\": \"- Commit ID: $COMMIT_ID\r\n- Released time: $TIMESTAMP\",
    \"draft\": false,
    \"prerelease\": false
  }' \
  --header \"Authorization: token $GITHUB_ACCESS_TOKEN\" \
  --header \"Content-Type: application/json\" \
  https://api.github.com/repos/moonlight8978/gfl-exp-calculator/releases"
http_code=$(eval $curl_command)

if [ $http_code = 201 ]; then
  exit 0
else
  cat release.json
  exit 1
fi
