def insert(arr,last_sorted_idx,insertable_val):
    current_pos = last_sorted_idx
    while current_pos >= 0 and arr[current_pos] > insertable_val:
        arr[current_pos + 1] = arr[current_pos]
        current_pos -= 1

    arr[current_pos + 1] = insertable_val

def insertion(arr):
    for i in range(1,len(arr)):
        last_sorted_idx = i - 1
        insertable_val = arr[i]
        insert(arr,last_sorted_idx,insertable_val)

arr = [5,-1,1,9,2]
insertion(arr)
print(arr)
