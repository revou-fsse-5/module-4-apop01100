import React, { useState } from 'react';
export const description = (step: number): string => {
    switch (step) {
      case 0:
        return 'Personal Information'
      case 1: 
        return 'Address Information'
      case 2:
        return 'Account Information'
      default:
        return 'Unknown Step'
    }
  }