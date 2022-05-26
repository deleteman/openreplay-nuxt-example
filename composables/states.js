import { useState } from "#app"

export const useUserId = () => { 
    console.log("using composable")
    return useState('userId', () => 0)
}