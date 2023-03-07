import csv

input_filename = 'data.csv'
output_filename = 'tort_data_new.csv'

with open(input_filename, 'r') as infile, open(output_filename, 'w', newline='') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    for i, row in enumerate(reader):
        if i == 0:  # Header row
            row[0] = 'tort #'  # Update the header for the first column
        else:  # Data rows
            row[0] = str(int(row[0]) - 8)  # Subtract 8 from the first column of the current row
        writer.writerow(row)
