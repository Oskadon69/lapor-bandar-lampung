// ============================================================
// LAPOR! Bandar Lampung — StatusBadge Component
// Copyright © 2026 by Ridho Kurniawan dan Dr. Erliyan Redy Susanto, M.Kom
// ============================================================

import React from 'react';
import { StatusPengaduan } from '@/types';
import { formatStatus, getStatusColor, getStatusDotColor } from '@/lib/utils';

interface StatusBadgeProps {
  status: StatusPengaduan;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5',
};

const dotSizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
};

export default function StatusBadge({
  status,
  size = 'md',
  showDot = true,
  className = '',
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full border
        ${sizeClasses[size]}
        ${getStatusColor(status)}
        ${className}
      `}
    >
      {showDot && (
        <span
          className={`
            rounded-full flex-shrink-0
            ${dotSizeClasses[size]}
            ${getStatusDotColor(status)}
          `}
        />
      )}
      {formatStatus(status)}
    </span>
  );
}
