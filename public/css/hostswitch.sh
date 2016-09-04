#!/bin/bash
read $com
case $com in 
	"add" ) echo "add" ;;
	"rm"  ) echo "remove" ;;
	"new" ) echo "new" ;;
esac
