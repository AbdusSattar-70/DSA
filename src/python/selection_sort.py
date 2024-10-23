def swap(arr: list[int], first_idx: int, second_idx: int) -> None:
    # Swap the elements at the given indices
    arr[first_idx], arr[second_idx] = arr[second_idx], arr[first_idx]

def find_min_index(arr: list[int], start_idx: int) -> int:
    # Find the index of the minimum value starting from start_idx to the end of the list
    cur_idx = start_idx
    cur_val = arr[cur_idx]
    for idx in range(start_idx, len(arr)):
        if arr[idx] < cur_val:
            cur_val = arr[idx]
            cur_idx = idx
    return cur_idx

def selection_sort(arr: list[int]) -> None:
    # Sort the array using the selection sort algorithm
    for i in range(len(arr)):
        # Find the index of the minimum element from i to the end
        min_idx = find_min_index(arr, i)
        # Swap the current element with the minimum element found
        swap(arr, i, min_idx)

# Test the code with an example array
arr = [5, 6, 7, 9, 1, 2, 3, 4, 80, 89, 1, -1, -89]
selection_sort(arr)
print(arr)
