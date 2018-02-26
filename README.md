# MANA App - Arakura School PB4L

MANA App for Arakura School and the PB4L roll out. Developed using Adobe PhoneGap.

## Usage

#### PhoneGap CLI

MANA App was made using [phonegap-cli][phonegap-cli-url].

    phonegap create my-app

To see a list of other available PhoneGap templates:

    phonegap template list

## [config.xml][config-xml]

#### android-minSdkVersion (Android only)

Minimum SDK version supported on the target device. Maximum version is blank by default.

This template sets the minimum to `14`.

    <preference name="android-minSdkVersion" value="14" />

#### &lt;access ...&gt; (All)

#### Content Security Policy (CSP)

For more information on the Content Security Policy, see the [section on CSP in the Cordova Whitelist Plugin documentation][cordova-plugin-whitelist-csp].

#### Related Links

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com
