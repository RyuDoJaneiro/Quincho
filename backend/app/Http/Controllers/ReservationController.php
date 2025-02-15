<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    public function getOne(Request $request, $date)
    {
        $reservation = Reservation::findWhere('reservationDate', $date);

        if ($date == -1)
        return;

        if (!$reservation)
        {
            return response()->json(['reservationFound' => false], 200);
        }
        else
        {
            return response()->json(['reservationFound' => true], 200);
        }
    }
}
