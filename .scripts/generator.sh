#!/bin/bash

# Get the library name, type (directive/service/component), and item name from the arguments
TYPE=$1
ITEM_NAME=$2

# Validate arguments
if [ -z "$TYPE" ] || [ -z "$ITEM_NAME" ]; then
  echo "Error: Please provide the type (directive|service|component|page|lib), and name."
  echo "Usage: npm run gen <directive|service|component|page|lib> <name>"
  exit 1
fi

# Determine the correct directory based on the type
case $TYPE in
  directive)
    DEST_DIR="apps/amalihomes/src/app/logic/directives/$ITEM_NAME"
    GENERATOR="@nx/angular:directive"
    REF=""
    ;;
  service)
    DEST_DIR="logic/services/$ITEM_NAME"
    GENERATOR="@nx/angular:service"
    REF="--project=amalihomes"
    ;;
  component)
    DEST_DIR="apps/amalihomes/src/app/presentation/components/$ITEM_NAME"
    GENERATOR="@nx/angular:component"
    REF=""
    ;;
  page)
  DEST_DIR="apps/amalihomes/src/app/presentation/pages/$ITEM_NAME"
  GENERATOR="@nx/angular:component"
  REF=""
  ;;
  lib)
  DEST_DIR="libs"
  GENERATOR="@nx/angular:lib"
  REF=""
  ;;
  *)
    echo "Error: Invalid type '$TYPE'. Use 'directive', 'service', 'component', 'page', or 'lib'."
    exit 1
    ;;
esac

# Run the Nx generate command
npx nx g $GENERATOR "$DEST_DIR/$ITEM_NAME" $REF

