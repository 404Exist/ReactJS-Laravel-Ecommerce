<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|max:191',
            'email' => 'required|unique:users,email|email',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $token = $user->createToken($user->email.'_Token', [''])->plainTextToken;
        return response(['user' => $user, 'token' => $token, 'message' => 'Successfully registered'], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $checkUser = User::whereEmail($request->email)->first();
        if ($checkUser && $checkUser->isAdmin == 0) {
            if (!auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
                return response(['message' => 'These credentials do not match our records.'], 401);
            }
            $token = auth()->user()->createToken($request->email.'_Token', [''])->plainTextToken;
            return response(['user' => auth()->user(), 'token' => $token, 'message' => 'Successfully logged in'], 201);
        }
        return response(['message' => 'These credentials do not match our records.'], 401);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response(['message' => 'Successfully logged out'], 200);
    }

    public function checkToken(Request $request)
    {
        $authToken = str_replace('Bearer ', '', $request->header('Authorization'));
        [$id, $token] = explode('|', $authToken, 2);
        $token = DB::table('personal_access_tokens')->where('id', $id)->where('token', hash('sha256', $token))->first();
        return $token ? response(['message' =>  'Vaild Token'], 200) : response(['message' => 'Invaild Token'], 401);
    }
}
