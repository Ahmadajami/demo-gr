import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
class Util {
	static countUp({
		targetNumber,
		durationMs,
		callback
	}: {
		targetNumber: number;
		durationMs: number;
		callback: (formattedNumber: string) => void; // Callback now receives a formatted string
	}): void {
		let currentNumber = 0;
		const increment = Math.ceil(targetNumber / (durationMs / 16));

		callback(this.formatNumber(currentNumber)); // Initial formatted number

		const interval = setInterval(() => {
			currentNumber += increment;

			if (currentNumber >= targetNumber) {
				currentNumber = targetNumber;
				clearInterval(interval);
			}

			callback(this.formatNumber(currentNumber)); // Formatted number in each update
		}, 16);
	}

	// Helper function to format numbers
	private static formatNumber(number: number): string {
		if (number >= 1000000) {
			return `${(number / 1000000).toFixed(1)}M`;
		} else if (number >= 1000) {
			return `${(number / 1000).toFixed(1)}k`;
		} else {
			return number.toString();
		}
	}
}

export default Util;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
