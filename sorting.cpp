#include <iostream>
using namespace std;

void selectionSort(int *arr, int n) {
	for(int i = 0; i < n; i++) {
		int min = arr[i];
		int minIndex = i;
		for(int j = i + 1; j < n; j++) {
			if(arr[j] < min) {
				min = arr[j];
				minIndex = j;
			}
		}
		// swap
		int temp = arr[i];
		arr[i] = min;
		arr[minIndex] = temp;
	}
}

void bubbleSort(int *arr, int n) {
	for(int i = 0; i < n; i++) {
		for(int j = i + 1; j < n; j++) {
			if(arr[i] > arr[j]) {
				// swap
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

void insertionSort(int *arr, int n) {
	for(int i = 1; i < n; i++) {
		int cur = arr[i];
		int j;
		for(j = i - 1; j >= 0; j--) {
			if(cur < arr[j]) {
				arr[j + 1] = arr[j];
			} else {
				break;
			}
		}
		arr[j + 1] = cur;
	}
}

void print(int *arr, int n) {
	for(int i = 0; i < n; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
}

// --------------------------Merge Sort--------------------------------------

void merge(int *arr, int si, int mi, int ei) {
	int size = ei - si + 1;
	int *A = new int[size];
	for(int i = si; i < size; i++) {
		A[i] = arr[i];
	}
	int p1 = si;
	int p2 = mi;
	while(p1 < mi && p2 <= ei) {
		if(A[p1] >= A[p2]) {
			arr[si++] = A[p2++];
		}
		else {
			arr[si++] = A[p1++];
		}
	}
	while(p1 < mi) {
		arr[si++] = A[p1++];
	}
	while(p2 <= ei) {
		arr[si++] = A[p2++];
	}
}

void mergeSort(int *arr, int si, int ei) {
	if(si >= ei) {
		return;
	} else {
		int mi = (si + ei) / 2;
		mergeSort(arr, si, mi);
		mergeSort(arr, mi + 1, ei);
		merge(arr, si, mi + 1, ei);
	}
}

// --------------------------End---------------------------------------------



// --------------------------------Quick Sort--------------------------------



void quickSort(int *arr, int start, int end) {
	if(start >= end) {
		return;
	}
	else {
		int c = partition(arr, start, end);
		quickSort(arr, start, c - 1);
		quickSort(arr, c + 1, end);
	}
}

// --------------------------------End---------------------------------------
int main() {
	int arr[] = {7, 8, 1, 2, 5, 9, 6};
	cout << "unsorted-array: ";
	print(arr, 7);
	// selectionSort(arr, 7);
	// bubbleSort(arr, 7);
	// insertionSort(arr, 7);
	mergeSort(arr, 0, 6);
	cout << "sorted-array: ";
	print(arr, 7);
}
