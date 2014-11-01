#!/usr/bin/env bash
set -e

command=$1

PACKAGE_NAME=com.sgimeno.cordova.testable

APP_NAME=Testable

function uninstall_package {
    echo "===== Uninstalling "$PACKAGE_NAME" on target "$1
    adb -s $1 uninstall  || { exit -3; }
}


function install_package {
    echo "===== Installing "$PACKAGE_NAME" on target "$1
    adb -s $1 install -r platforms/android/ant-build/CordovaApp-debug.apk || { exit -4; }
}

function launch_package {
    echo "===== Launching "$PACKAGE_NAME" on target "$1
    adb -s $1 shell monkey -p $PACKAGE_NAME -c android.intent.category.LAUNCHER 1 || { exit -5; }
}

function clear_data {
    adb -s $1 shell pm clear $PACKAGE_NAME
}

function build {
    grunt build
    cordova build android --debug
}

function install {
    deviceSerial=$(adb devices | awk 'NR > 1 {print $1}' | sed ':a;N;$!ba;s/\n/ /g' | head -1)
    if [[ -z "$deviceSerial" ]]
    then
        echo "No device was found. Aborting the command"
        exit -8
    fi
    install_package $deviceSerial
    launch_package $deviceSerial
}

function multi_install {
    
    deviceLst=$(adb devices | awk 'NR > 1 {print $1}' | sed ':a;N;$!ba;s/\n/ /g')
    if [[ -z "$deviceLst" ]]
    then
        echo "There are no connected devices"
        exit 9
    else
        for d in $deviceLst
        do
            clear_data $d
            uninstall_package $d
            install_package $d
            launch_package $d
        done
    fi
    date +"%D - %T"
}

case $command in
    build)
        build
        ;;
    install)
        install
        ;;
    update)
        build
        install
        ;;
    wipe)
        clear_data
        ;;
    multi_launch)
        multi_launch
        ;;
    *)
        cat env.txt
        exit 2;;
esac
