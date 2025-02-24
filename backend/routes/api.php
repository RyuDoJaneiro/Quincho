<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

Route::get('/reservation', [ReservationController::class, 'index']);

Route::get('/reservation/getOne', [ReservationController::class, 'getOne']);

Route::post('/reservation', [ReservationController::class, 'create']);
