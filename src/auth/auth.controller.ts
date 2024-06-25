import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('auth0')
  @UseGuards(AuthGuard('auth0'))
  async auth0Login() {}

  @Get('auth0/callback')
  @UseGuards(AuthGuard('auth0'))
  auth0Callback(@Req() req, @Res() res) {
    const jwt = this.authService.login(req.user);
    res.redirect(`http://localhost:3000?jwt=${jwt.access_token}`);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req, @Res() res) {
    const jwt = this.authService.login(req.user);
    res.redirect(`http://localhost:3000?jwt=${jwt.access_token}`);
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin() {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  facebookCallback(@Req() req, @Res() res) {
    const jwt = this.authService.login(req.user);
    res.redirect(`http://localhost:3000?jwt=${jwt.access_token}`);
  }
}
