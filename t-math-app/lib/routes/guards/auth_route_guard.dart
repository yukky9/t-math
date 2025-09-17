import 'package:flutter/material.dart';
import 'package:flutter_app/app/networking/api_service.dart';
import 'package:flutter_app/resources/pages/login_page.dart';
import 'package:nylo_framework/nylo_framework.dart';

/* Auth Route Guard
|--------------------------------------------------------------------------
| Checks if the User is authenticated.
| Learn more https://nylo.dev/docs/5.20.0/router#route-guards
|-------------------------------------------------------------------------- */

class AuthRouteGuard extends NyRouteGuard {
  AuthRouteGuard();

  @override
  Future<bool> canOpen(BuildContext? context, NyArgument? data) async {
    dump(await Auth.loggedIn());
    return (await Auth.loggedIn());
  }

  @override
  redirectTo(BuildContext? context, NyArgument? data) async {
    await routeTo(LoginPage.path);
  }
}
